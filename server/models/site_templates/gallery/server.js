const express = require('express');
const path = require('path');
const app = express();

//////////////////////////////
// config ===================
//////////////////////////////
const port = process.env.PORT || 1337;

//////////////////////////////
// routes ===================
//////////////////////////////
app.get('/', function(req, res) {
  res.sendFile('index.html', { root: './' });
});

app.use('/', express.static(path.join(__dirname, '/.')));
app.use('/public', express.static(path.join(__dirname, '/public')));


app.listen(port);
console.log('Server is listening at port: ' + port);

// export our app for testing and flexibility, required by index.js
module.exports = app;
