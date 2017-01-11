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

var Schema = mongoose.Schema;
var UsernameSchema = new Schema({
  name: String,
  id: String,
  token: String
});

module.exports = {
  db: db,
  Username: mongoose.model('Username', UsernameSchema)
}


