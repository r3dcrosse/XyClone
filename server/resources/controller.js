const db = require('./configDB');

var newUsername = new db.Username({
  username: "evan",
  password: "password"
})

newUsername.save().then(function(saved) {
  console.log(saved);
})