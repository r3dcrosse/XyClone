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
        sequenceValue: 0
      })
      Sequence.create(newSequence)
      .then((data) => {
        console.log('SEQUENCE GOT CREATED FOR FIRST TIME')
        callback(0);
      })
    } else {
      var newSequenceValue = data.sequenceValue + 1;
      Sequence.findOneAndUpdate({grabKey: 'Grabbed'}, {sequenceValue: newSequenceValue})
      .then((data) => {
        console.log('SEQUENCE GOT UPDATED!!!!!!!!!!!!!!!!!!!', data);
        callback(data.sequenceValue);
      })
      .catch((err) => {
        console.log('ERROR IN FINDING ONE AND UPDATING/INCREMENTING')
      })
    }
  })
  .catch((err) => {
    console.log('ERROR IN FINDING ONE WITH GRABKEY')
  })
}

let grabProjects = function(callback) {

}


module.exports = {
  addNewProject: function(req, res) {
    console.log('ADDING A NEW PROJECT ===============================')
    grabSequenceNumAndIncrement(function(newSequenceNum) {

    })
  },
  saveUserIdAndReturnStorage: function(req, res) {
    //REFACTOR TO RETURN STORAGE
    res.send('YOU GOT ME');
    console.log('THIS IS REQUEST FOR SAVE USER ID ==================================', req.body.userId);
    User.findOne({userId: req.body.userId})
    .then((result) => {
      if (result) {
        console.log('USER IS ALREADY INSIDE DATABASE');
      } else {
        let newUser = new User({
          userId: req.body.userId,
          projects: []
        });
        newUser.save()
        .then((result) => {
          console.log('USER HAS BEEN SAVED INTO THE DATABASE!');
          res.send('YOLLOSWAG IT HAS WORKED USER HAS BEEN UPDATED INTO DATABASE');
        });
      }
    })
    .catch(() => {
      console.log('USER HAS FAILED TO BE UPDATED INTO DATABASE');
    })
  },
  saveUserSite: function(req, res) {
    // write files to a directory based on req state tree
    console.log('REQUEST', req.body, 'REQUEST');
    // Save the website prop tree to database
    Project.findOneAndUpdate({projectId: 1}, {title: req.bidy.title, projectId: req.body.projectId, userId: req.body.userId, storage: req.body.storage, components: req.body.components}, {upsert: true})

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