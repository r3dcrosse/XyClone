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
const passport = require('./facebookPassport.js')

// Router.route('/')
//   .get(function(req, res) {
//     res.sendFile('index.html')
//   });

Router.route('/facebook/auth', passport.authenticate('facebook'));

// used to serialize the user for the session
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
      done(err, user);
  });
});

Router.route('/buildSite')
  .post(function(req, res) {
    // write files to a directory based on req state tree
    console.log('REQUEST', req.body, 'REQUEST');

    // Save the website prop tree to database
    Project.findOneAndUpdate({id: 1}, {title: 'MVProject', storage: req.body.storage, components: req.body.components}, {upsert: true})

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
  });

Router.route('/tempData/myZip.zip')
  .get(function(req, res) {
    console.log('serverside')

    // Pull propTree from database and assemble website
    Project.findOne({id: 1})
      .then(function(data) {
        data === null ? console.log('Could not find website in database') : console.log('found website', data);
        // Copy template to a new folder that can be modified
        ncp.limit = 16;
        ncp('./server/site_templates/gallery', './server/tempData/fileToBeZipped', function(err) {
          if (err) {
            return console.error('ERROR COPYING TEMPLATE', err);
          }
          console.log('TEMPLATE SUCCESSFULLY COPIED');

          // Write css file to template
          fs.writeFile(
            path.resolve(__dirname, '../tempData/fileToBeZipped/styles.css'),
            generator.mapBodyCSS(data),
            function() {
              // Write IndexComponent to template
              fs.writeFile(
                path.resolve(__dirname, '../tempData/fileToBeZipped/app/components/IndexComponent.js'),
                generator.mapStateTreeToReact(data),
                function() {
                  // Zip templated directory and send back to user
                  zipdir(
                    './server/tempData/fileToBeZipped',
                    { saveTo: './server/tempData/MyCoolSite.zip' },
                    function(err, buffer) {
                      console.log('File was zipped and can now be downloaded');
                      res.sendFile('tempData/MyCoolSite.zip', {root: '../XyClone/server/'});
                    }
                  )
                }
              );
            }
          );


          // Inject new code into copied directory
          // injectFile.writeToFile(
          //   path.resolve(__dirname, '../tempData/fileToBeZipped/app/components/IndexComponent.js'),
          //   generator.mapStateTreeToReact(data),
          //   function() {
          //     return zipdir('./server/tempData/fileToBeZipped', {saveTo: './server/tempData/MyCoolSite.zip'}, function(err, buffer) {
          //       console.log('File was zipped and can now be downloaded');
          //       res.sendFile('tempData/MyCoolSite.zip', {root: '../XyClone/server/'});
          //     });
          //   }
          // );
          // Zip up directory and send to user

        });
      })
      .catch(function(error) {
        console.log(error);
      })
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
