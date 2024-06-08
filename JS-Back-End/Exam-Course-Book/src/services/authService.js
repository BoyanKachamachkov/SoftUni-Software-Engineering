const User = require('../models/User');
const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../config');
const bcrypt = require('bcrypt');



exports.register = async (regData) => {

    if (regData.password !== regData.rePassword) {
        throw new Error('Passwords do not match!');
    }
    // check user
    const user = await User.findOne({ email: regData.email });
    if (user) {
        throw new Error('Email is already taken!');
    }

    return User.create(regData);

};


exports.login = async ({ email, password }) => {

    // check password
    const user = await User.findOne({ email });

    if (!user) {
        throw new Error('Email or password is invalid!');
    }

    // compare password to db
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Email or password is invalid!');
    }

    // generate token
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
    };
    const token = await jwt.sign(payload, SECRET, { expiresIn: '2h' });

    return token;

};