const path = require('path');
const Router = require('express').Router();
const Controller = require('./controller');
const zipdir = require('zip-dir');

// Router.route('/')
//   .get(function(req, res) {
//     res.sendFile('index.html')
//   });

Router.route('/buildSite')
  .get(function(req, res) {
    // generate necessary files
    res.send('/fakeData');
    // build zip file with all necessary files
    // save .zip on the db
    // delete files on server
    // send back the location of the zip file
  });

Router.route('/fakeData')
  .get(function(req, res) {
    console.log('serverside')
    res.sendFile('fakeData/templates.zip', {root: '../XyClone/server/'});
  });

module.exports = Router