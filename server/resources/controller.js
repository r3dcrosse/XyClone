const db = require('./configDB');
const Project = require('../models/projectSchema');
const User = require('../models/userSchema');
const Sequence = require('../models/sequenceSchema');


let grabSequenceNumAndIncrement = function(callback) {
  Sequence.findOne({grabKey: 'Grabbed'})
  .then((data) => {
    if (data === null) {
      var newSequence = new Sequence({
        grabKey: 'Grabbed',
        sequenceValue: 0
      })
      Sequence.create(newSequence)
      .then((data) => {
        console.log('SEQUENCE GOT CREATED FOR FIRST TIME')
        callback(0);
      })
    } else {
      var newSequenceValue = data.sequenceValue + 1;
      Sequence.findOneAndUpdate({grabKey: 'Grabbed'}, {sequenceValue: newSequenceValue})
      .then((data) => {
        console.log('SEQUENCE GOT UPDATED!!!!!!!!!!!!!!!!!!!', data);
        callback(data.sequenceValue);
      })
      .catch((err) => {
        console.log('ERROR IN FINDING ONE AND UPDATING/INCREMENTING')
      })
    }
  })
  .catch((err) => {
    console.log('ERROR IN FINDING ONE WITH GRABKEY')
  })
}


module.exports = {
  addNewProject: function(req, res) {
    console.log('ADDING A NEW PROJECT ===============================')
    grabSequenceNumAndIncrement(function(newSequenceNum) {

    })
  },

  grabUserComponents: function(req, res) {
    console.log('GRABBING USER COMPONENTS ==============================')
  },

  saveUserId: function(req, res) {
    console.log('THIS IS REQUEST FOR SAVE USER ID ==================================', req.body);
    User.findOrCreate({userId: req.body.id})
    .then({
      console.log('USER HAS BEEN UPDATED INTO DATABASE');
    })
    .catch({
      console.log('USER HAS FAILED TO BE UPDATED INTO DATABASE');
    })
  }
}