const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../config');

exports.register = async (userData) => {
    if (userData.password !== userData.rePassword) {
        throw new Error('Passwords missmatch');
    }

    // check if usr already exists
    const user = await User.findOne({ email: userData.email });
    if (user) {
        throw new Error('User already exists');
    }

    return User.create(userData); //will handle promise in controller
};
exports.login = async ({ email, password }) => {
    // get user from db
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Email or password is invalid');
    }
    // check pw
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Email or password is invalid');

    }


    // generate token
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,

    };
    const token = await jwt.sign(payload, SECRET, { expiresIn: '2h' });

    // return token
    return token;
};
