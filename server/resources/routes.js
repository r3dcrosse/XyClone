const path = require('path');
const Router = require('express').Router();

const Controller = require('./controller');
const zipdir = require('zip-dir');
const fs = require('fs');
const Project = require('../models/projectSchema');
var ncp = require('ncp').ncp;
const bodyParser = require('body-parser');

const generator = require('../generator/generator');
const injectFile = require('../generator/writeToFile');
// const passport = require('./facebookPassport.js')

// SAVE USER ROUTE
Router.route('/saveUser')
  .post(Controller.saveUserIdAndReturnStorage);

// GRAB USER COMPONENTS ROUTE
// WHEN WE USE SESSIONS, WE CAN CHANGE THIS TO GET AND USE SESSION.USER
// // ADD NEW PROJECT ROUTE
Router.route('/addNewProject')
  .post(Controller.addNewProject);

Router.route('/saveSite')
  .post(Controller.saveUserSite);

// Router.route('/editProject')
//   .post(Controller.saveProjectEdit);

Router.route('/deleteProject')
  .post(Controller.deleteProject);

Router.route('/download/:projectId')
  .get(Controller.downloadProject)
  .delete(function(res) { // Not sure if we still need this endpoint?
    console.log(res.url)
    fs.unlink('./server/tempData/myZip.zip', function(err) {
      if (err) {
        console.log(err)
        console.log('not successfully deleted');
      }
    });
  });


module.exports = Router
