const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = require('./resources/routes');
const webpack = require('webpack');
const config = require('../webpack.config');

const app = express();
const compiler = webpack(config);
// configure our server with all the middleware and routing

// middleware to enable hot reloading
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));

// start listening to requests on port 8000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('*', function(req, res) {
  res.sendFile('index.html', {root: './'});
});
// app.get('/', function(req, res) {
//     res.sendFile('index.html');
// })
app.use(router);

// export our app for testing and flexibility, required by index.js
const port = process.env.PORT || 8000;
console.log('Server is listening at port: ' + port);
app.listen(port);


module.exports = app;
