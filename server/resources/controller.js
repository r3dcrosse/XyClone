const db = require('./configDB');
const Project = require('../models/projectSchema.js');

var newUsername = new db.Username({
  username: "evan",
  password: "password"
})

newUsername.save().then(function(saved) {
  console.log(saved);
})



