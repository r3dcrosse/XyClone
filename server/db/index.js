var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var app = express();

var db = mongoose.connection;

db.on('error', console.error);

mongoose.connect('mongodb://localhost/8000');