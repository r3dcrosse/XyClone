const db = require('./configDB');
const Project = require('../models/projectSchema');
const User = require('../models/userSchema');
const Sequence = require('../models/sequenceSchema');


let grabSequenceNumAndIncrement = function(callback) {
  Sequence.findOne({grabKey: 'Grabbed'})
  .then((data) => {
    if (data === null) {
      let newSequence = new Sequence({
        grabKey: 'Grabbed',
        sequenceValue: 1
      })
      Sequence.create(newSequence)
        .then((result) => {
          console.log('SEQUENCE GOT CREATED FOR FIRST TIME')
          callback(1);
        })
    } else {
      var newSequenceValue = data.sequenceValue + 1;
      console.log(newSequenceValue, 'THE UPDATED SEQUENCE VALUE');
      Sequence.findOneAndUpdate({grabKey: 'Grabbed'}, {sequenceValue: newSequenceValue})
        .then((result) => {
          callback(newSequenceValue);
        })
        .catch((err) => {
          console.log('ERROR IN FINDING ONE AND UPDATING/INCREMENTING')
          console.log(err);
        })
    }
  })
  .catch((err) => {
    console.log('ERROR IN FINDING ONE WITH GRABKEY')
  })
}

let grabProjectsAndComponents = function(userId, callback) {
  Project.find({userId: userId})
    .then((projects) => {
      console.log('sending projects back!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1');
      callback(projects);
    })
    .catch((err) => {
      console.log('ERROR IN GRABBING ALL THE PROJECTS BY THIS DUDE');
      console.log(err);
    });
}


module.exports = {

  addNewProject: function(req, res) {
    console.log('ADDING A NEW PROJECT ===============================')
    grabSequenceNumAndIncrement(function(newSequenceNumber) {
      console.log('SEDINGIN BACK NEW SEEQUENCE NUMBER!', newSequenceNumber);
      var bodyString = `body${newSequenceNumber}`
      var newProject = new Project({
        projectId: newSequenceNumber,
        title: `DEFAULT PROJECT ${newSequenceNumber}`,
        description: `DEFAULT PROJECT DESCRIPTION`,
        components: [],
        storage: {
          [bodyString]: {
            css: {
              display: 'inline-flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'center',
              position: 'relative',
              alignItems: 'center',
              backgroundColor: '#000000',
              marginLeft: '180px',
              padding: '0px',
              width: '70%',
              height: '100%',
            }
          }
        },
        userId: req.body.userId
      });
      newProject.save()
        .then(()=> {
          console.log('NEW PROJECT WAS CREATED AND SAVED')
          res.json(newProject);
        })
        .catch((err) => {
          console.log('ERROR ON NEW PROJECT CREATE');
          console.log(err)
          res.end();
        })
      // body: {
      //   css: {
      //     display: 'inline-flex',
      //     flexDirection: 'row',
      //     flexWrap: 'wrap',
      //     justifyContent: 'center',
      //     position: 'relative',
      //     alignItems: 'center',
      //     backgroundColor: '#000000',
      //     marginLeft: '180px',
      //     padding: '0px',
      //     width: '70%',
      //     height: '100%',
      //   }
      // }
      // CREATE A NEW PROJECT HERE.
      // res.status(200).json({newSequenceNumber: newSequenceNumber});
    })
  },

  saveUserIdAndReturnStorage: function(req, res) {
    //REFACTOR TO RETURN STORAGE
    console.log('THIS IS REQUEST FOR SAVE USER ID ==================================', req.body.userId);
    User.findOne({userId: req.body.userId})
    .then((result) => {
      if (result) {
        console.log('USER IS ALREADY INSIDE DATABASE')
        grabProjectsAndComponents(req.body.userId, function(projects) {
          console.log('SETTING STATUS AND SENDING BACK', projects);
          // res.status(404).end();
          res.status(201).json(projects);
        });
      } else {
        let newUser = new User({
          userId: req.body.userId,
          projects: []
        });
        newUser.save()
        .then((result) => {
          console.log('USER HAS BEEN SAVED INTO THE DATABASE!');
          res.status(204).send({});
        })
        .catch((err) => {
          console.log('ERROR IN SAVING THE NEW USERNAME!');
          console.log(err);
          res.status(404).end();
        });
      }
    })
    .catch((err) => {
      console.log('WE HAVE FAILED TO LOOKUP USERS IN DATABASE');
      console.log(err);
    })
  },

  saveUserSite: function(req, res) {
    // write files to a directory based on req state tree
    console.log('REQUEST', req.body, 'REQUEST');
    // Save the website prop tree to database
    Project.findOneAndUpdate({projectId: 1}, {title: req.body.title, projectId: req.body.projectId, userId: req.body.userId, storage: req.body.storage, components: req.body.components}, {upsert: true})
      .then(function(data) {
        if (data === null) {
          console.log('Project Created');
        } else {
          console.log('Updated Project');
        }
        res.send('/tempData/myZip.zip');
      })
      .catch(function(error) {
        console.log(error)
      });
  }
}