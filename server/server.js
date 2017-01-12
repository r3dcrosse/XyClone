const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./resources/routes');
const webpack = require('webpack');
const config = require('../webpack.config');
const session = require('express-session')
const mongoose = require('mongoose');
const morgan = require('morgan');

const jwt = require('jsonwebtoken');
const database = require('./config');
// const passport = require('./resources/facebookPassport.js')

const app = express();
const compiler = webpack(config);

//////////////////////////////
// config ===================
//////////////////////////////
const port = process.env.PORT || 8000;
mongoose.connect(database.database);
app.set('superSecret', database.secret);

// ALLOW CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// middleware to enable hot reloading
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

// start listening to requests on port 8000
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(router);

// use morgan to log requests to the console
app.use(morgan('dev'));
app.use(session({secret: 'yolo'}));
// app.use(passport.initialize());
// app.use(passport.session());
//////////////////////////////
// routes ===================
//////////////////////////////

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: './'});
});

// app.get('/', function(req, res) {
//     res.sendFile('index.html');
// })


app.listen(port);
console.log('Server is listening at port: ' + port);

// export our app for testing and flexibility, required by index.js
module.exports = app;
