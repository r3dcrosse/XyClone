var mongoose = require('mongoose');

var dbURI = 'mongodb://localhost/XyClone'
mongoose.connect(dbURI);
var db = mongoose.connection;

db.on('error', function() {
  console.log('yoloERROR');
})
db.once('on', function() {
  console.log('MONGODB OPEN')
})

module.exports = {
  db: db
}


