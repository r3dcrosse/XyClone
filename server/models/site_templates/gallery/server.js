const express = require('express');
const app = express();

//////////////////////////////
// config ===================
//////////////////////////////
const port = process.env.PORT || 1337;

// set the view engine to jsx for server side rendering
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

//////////////////////////////
// routes ===================
//////////////////////////////
app.get('/', require('./routes').index);


app.listen(port);
console.log('Server is listening at port: ' + port);

// export our app for testing and flexibility, required by index.js
module.exports = app;
