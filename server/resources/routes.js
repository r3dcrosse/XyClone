const path = require('path');
const Router = require('express').Router();
const Controller = require('./controller');
const zipdir = require('zip-dir');
const fs = require('fs');

// Router.route('/')
//   .get(function(req, res) {
//     res.sendFile('index.html')
//   });

Router.route('/buildSite')
  .post(function(req, res) {
    // write files to a directory based on req state tree

    zipdir('./server/templates', {saveTo: './server/fakeData/myZip.zip'}, function(err, buffer) {
    })
    res.send('/fakeData/myZip.zip');
  });

Router.route('/fakeData/myZip.zip')
  .get(function(req, res) {
    console.log('serverside')
    res.sendFile('fakeData/myZip.zip', {root: '../XyClone/server/'});
  })
  .delete(function(res) {
    console.log(res)
    fs.unlink('./server/fakeData/myZip.zip', function(err) {
      if (err) {
        console.log(err)
        console.log('not successfully deleted');
      }
    });
  })

module.exports = Router