// init mongoose
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema;

//test schema for inserting project zip files for users
// create a mongoose model and add it to exports
const User = mongoose.model('User', new Schema({
    userId: String,
    projects: [Number],
    password: String
}));

module.exports = User
