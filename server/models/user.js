// init mongoose
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a mongoose model and add it to exports
module.exprts = mongoose.model('User', new Schema({
    name: String,
    password: String,
    admin: Boolean
}));

