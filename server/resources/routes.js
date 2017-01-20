const path = require('path');
const Router = require('express').Router();

const Controller = require('./controller');
const authController = require('./authController')
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

Router.route('/updateProjectSummary')
  .post(Controller.updateProjectSummary);

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

Router.route('/signup')
  .post(function (req, res) {
    var credentials = req.body;
    console.log(credentials)
    authController.saveUser(req.body.usn, req.body.pass, (status, token, projects) => {
      if (status === 200) {
          console.log('going to send', status)
          res.status(200).json({token: token, response: 'signed up', projectsData: projects});
        } else if (status === 400) {
          console.log('sending this status');
          res.status(201).json('UH OH');
        } else {
          res.status(500).send('Sorry, there was an error, please try again later')
        }
    })
  })

Router.route('/login')
  .post(function (req, res) {
    var username = req.body.usn,
        password = req.body.pass;
    console.log('usrname', username)

    authController.validateUser(username, password, (authResponse, token, projects) => {
      if (authResponse) {
        console.log('on the server valid login')
        res.status(200).json({token: token, response: 'valid login', projectsData: projects})
      } else if (authResponse === 400) {
        console.log('on the server 400 err')
        res.status(200).send('user not found')
      } else if (authResponse === 500) {
        console.log('on the server in 500')
        res.status(200).send('server error')
      } else if (authResponse === false) {
        console.log('on the server in 401')
        res.status(200).send('password incorrect')
      }
    })
  })

module.exports = Router
