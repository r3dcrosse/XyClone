var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var express = require('express');
var fs = require('fs');

var userSchema = new Schema({
  username:  { type: String, unique: true },
  password:  String,
  projects: [{ title: String, data: Buffer, contentType: String }]
  //test schema for inserting project zip files for users
});

module.exports = mongoose.model('User', userSchema);