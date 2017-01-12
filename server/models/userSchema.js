// init mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//test schema for inserting project zip files for users
// create a mongoose model and add it to exports
module.exports = mongoose.model('User', new Schema({
    // name: String,
    // password: String,
    userId: String,
    projects: [Number]
}));

