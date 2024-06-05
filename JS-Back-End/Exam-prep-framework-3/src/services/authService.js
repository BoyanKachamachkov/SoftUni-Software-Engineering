const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../config');

exports.regiter = async (userData) => {
    // check pw match?
    if (userData.password !== userData.rePassword) {
        throw new Error('Passwords do not match!');
    }

    // create & check user?
    const user = await User.findOne({ email: userData.email });
    if (user) {
        throw new Error('Email is already taken!');
    }

    // create user via authService, handle promise in controller later
    return User.create(userData);
};