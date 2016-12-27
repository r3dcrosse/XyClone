const express = require('express');
const bodyParser = require('body-parser');
const router = require('./resources/routes');
const app = express();

// configure our server with all the middleware and routing

// start listening to requests on port 8000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.use(express.static(__dirname + '/../build'))

// app.get('/', function(req, res) {
//     res.sendFile('index.html');
// })
app.use(router);

// export our app for testing and flexibility, required by index.js
const port = process.env.PORT || 8000;
console.log('Server is listening at port: ' + port);
app.listen(port);


module.exports = app;
