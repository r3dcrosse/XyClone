const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/userSchema');
const jwt = require('jsonwebtoken');

const saveUser = function (userId, password, cb) {
    bcrypt.hash(password, 8, (err, hash) => {
        var newUser = new User({
            userId: userId, 
            projects: [],
            password: hash
        });
        console.log('userId', userId)
        console.log('assword', password)
        console.log('hashed', hash)
        User.findOne({userId: userId})
            .then((result) => {
                if (result) {
                    console.log('a user with that name already exists')
                    cb(400);
                } else {
                    console.log('didnt find a user with that name')
                    let newUser = new User({
                        userId: userId,
                        projects: [], 
                        password: hash
                    });
                    newUser.save()
                        .then((result) => {
                            console.log('saved user to db', result)
                            // secret should really be a private key
                            jwt.sign({
                                data: userId
                            }, 'secret', { expiresIn: '1h' }, function (err, token) {
                                console.log('token :', token)
                                cb(200, token);
                            });
                        })
                        .catch((err) => {
                            console.log(err);
                            cb(500);
                        });
                }
         })
    })
}

module.exports.saveUser = saveUser;