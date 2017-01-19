const db = require('./configDB');
const Project = require('../models/projectSchema');
const User = require('../models/userSchema');
const Sequence = require('../models/sequenceSchema');
const zipdir = require('zip-dir');
const fs = require('fs');
const path = require('path');
const ncp = require('ncp').ncp;
const generator = require('../generator/generator');


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
        title: req.body.title,
        imgUrl: req.body.imgUrl,
        description: req.body.description,
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
              border: 'none'
            }
          }
        },
        userId: req.body.userId
      });
      newProject.save()
        .then(()=> {
          console.log('NEW PROJECT WAS CREATED AND SAVED', newProject)
          res.json(newProject);
        })
        .catch((err) => {
          console.log('ERROR ON NEW PROJECT CREATE');
          console.log(err)
          res.end();
        })
    })
  },

  updateProjectDashboard: function(req, res) {
    Project.findOneAndUpdate({projectId: req.body.projectId},
      {
        title: req.body.title,
        imgUrl: req.body.imgUrl,
        description: req.body.description,
      })
      .then(function(data) {
        console.log('Updated Project');
        res.status(204).end();
      })
      .catch(function(error) {
        console.log('FAILED TO UPDATE PROJECT')
        console.log(error)
      });
  },

  deleteProject: function(req, res) {
    // console.log('DELETE A PROJECT ------------------------------------');
    // console.log('-----------------project info-----------------');
    // console.log('userID:::::::', req.body.userId);
    // console.log('projectId::::::', req.body.projectId);
    Project.findOneAndRemove({
      userId: req.body.userId,
      projectId: req.body.projectId
    }).then((result) => {
      console.log('Deleted this project', result);
      if (result) {
        res.status(205).json(result);
      }
      res.status(204).end();
    }).catch((err) => {
      console.log('FAILED TO DELETE PROJECT IN DB');
      console.log(err);
    });
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
    Project.findOneAndUpdate({
      projectId: req.body.projectId},
      {
        projectId: req.body.projectId,
        storage: req.body.storage,
        components: req.body.components
      })
      .then(function(data) {
        console.log('Updated Project');
        // Sendback link to download site
        // res.send('/tempData/myZip.zip');
        res.send(`/download/${req.body.projectId}`);
      })
      .catch(function(error) {
        console.log(error)
      });
  },

  downloadProject: function(req, res) {
    const projectId = req.params.projectId;

    console.log('Trying to download projectId: ', projectId);

    // Pull propTree from database and assemble website
    Project.findOne({projectId: projectId})
      .then(function(data) {
        // Check if website is found in database
        if (data === null) {
          console.log('COULD NOT FIND WEBSITE IN DATABASE');
          res.status(204).end();
        }

        console.log('found website', data);
        // Copy template to a new folder that can be modified
        ncp.limit = 16;
        ncp('./server/site_templates/gallery', `./server/tempData/${projectId}`, function(err) {
          if (err) {
            return console.error('ERROR COPYING TEMPLATE', err);
          }
          console.log('TEMPLATE SUCCESSFULLY COPIED');

          // Write css file to template
          fs.writeFile(
            path.resolve(__dirname, `../tempData/${projectId}/styles.css`),
            generator.mapBodyCSS(data),
            function() {
              // Generate index.jsx (the root component that includes react-routes)
              fs.writeFileSync(
                path.resolve(__dirname, `../tempData/${projectId}/app/index.jsx`),
                generator.generateIndexFile(data)
              );

              // Build out obj of different of pages to generate js files for
              var pageHash = {};
              data.components.forEach((component) => {
                pageHash[component.page] === undefined ?
                  pageHash[component.page] = [component] :
                  pageHash[component.page].push(component);
              });

              // generate file for each page
              for (var page in pageHash) {
                fs.writeFileSync(
                  path.resolve(__dirname, `../tempData/${projectId}/app/components/${page}.js`),
                  generator.generateComponentFile(page, pageHash, data)
                );
              }

              // Zip templated directory and send back to user
              zipdir(
                `./server/tempData/${projectId}`,
                { saveTo: `./server/tempData/${projectId}.zip` },
                function(err, buffer) {
                  console.log('File was zipped and can now be downloaded');
                  res.sendFile(`tempData/${projectId}.zip`, {root: '../XyClone/server/'});
                }
              );
            }
          );
        });
      })
      .catch(function(error) {
        console.log(error);
      })
    }
}

  // saveProjectEdit: function(req, res) {
  //   Project.findOneAndUpdate({})
  // }
