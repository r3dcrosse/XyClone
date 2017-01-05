const path = require('path');
const Router = require('express').Router();

const Controller = require('./controller');
const zipdir = require('zip-dir');
const fs = require('fs');
const Project = require('../models/projectSchema');
var ncp = require('ncp').ncp;
const bodyParser = require('body-parser');

// Router.route('/')
//   .get(function(req, res) {
//     res.sendFile('index.html')
//   });

Router.route('/buildSite')
  .post(function(req, res) {
    // write files to a directory based on req state tree
    console.log('REQUEST', req.body, 'REQUEST');

    zipdir('./server/models/site_templates/gallery', {saveTo: './server/tempData/myZip.zip'}, function(err, buffer) {
      console.log('hi');
 
      ncp.limit = 16;
       
      ncp('./server/models/site_templates/gallery', './server/tempData/myZip.zip', function (err) {
       if (err) {
         return console.error(err);
       }
       console.log('done!');
      });
      //hard coding in the single project ID, will need to refactor later
      Project.findOneAndUpdate({id: 1}, {title: 'MVProject', stateTree: req.body.dummyData.stateTree, components: req.body.dummyData.components}, {upsert: true})
      .then(function(data) {
        if (data === null) {
          console.log('Project Created');
        } else {
          console.log('Updated Project');
        }
      })
      .catch(function(error) {
        console.log(error)
      });
    })
    res.send('/tempData/myZip.zip');
  });

Router.route('/tempData/myZip.zip')
  .get(function(req, res) {
    console.log('serverside')
    res.sendFile('tempData/myZip.zip', {root: '../XyClone/server/'});
  })
  .delete(function(res) {
    console.log(res.url)
    fs.unlink('./server/tempData/myZip.zip', function(err) {
      if (err) {
        console.log(err)
        console.log('not successfully deleted');
      }
    });
  });


module.exports = Router