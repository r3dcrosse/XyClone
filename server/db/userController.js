var User = require('./userModel.js');
// haven't implemented individual users yet

//sample of how a user would be created

exports.createUser = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var projects = req.body.projects;
  if (!username || !password) {
    res.send({ error: 'Please fill out all fields' });
  } else {
    User.create({
      username: username,
      password: password
    }, function(err, user) {
      if (err) {
        res.send({ error: 'Username is already taken' });
      } else {
        console.log('Saved', req.body.username, 'to the database');
        res.send(user);
      }
    });
  }
};

exports.createProject = function(req, res) {
  var projects = req.body.projects;

  User.create({
    projects: projects
  }, function(err, user) {
    if (err) {

    } else {
      
    }
  })
}