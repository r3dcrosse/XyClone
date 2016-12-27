const path = require('path');
const Router = require('express').Router();
const Controller = require('./controller')

Router.route('/')
  .get(function(req, res) {
    res.sendFile('index.html')
  })


module.exports = Router