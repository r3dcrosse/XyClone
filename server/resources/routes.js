const path = require('path');
const Router = require('express').Router();
const Controller = require('./controller')
const User = require('../models/user')

Router.route('/setup')
  .get(function(req, res) {});

Router.route('/*')
  .get(function(req, res) {
    res.sendFile('index.html',  {root: './'})
  });

Router.route('/login')
  .get(function(req, res) {
    console.log('get received');

    // sample user
    var forrest = new User({
      name: 'Forrest Murray',
      password: 'qwer1234',
      admin: 'true'
    });

    // save sample user
    forrest.save(function(err) {
      if (err) throw err;

      console.log('User saved successfully');
      res.json({success: true});
    })
  })


module.exports = Router