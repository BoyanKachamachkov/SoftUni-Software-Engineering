const User = require('../models/User');
const bcrypt = require('bcrypt');


exports.register = async (regData) => {
    if (regData.password !== regData.rePassword) {
        throw new Error('Passwords do not match!');
    }

    const user = await User.findOne({ email: regData.email });

    if (user) {
        throw new error('User with that email already exists!');
    }

    return User.create(regData);
};


exports.login = async (loginData) => {
    // check user
    const user = await User.findOne({ email: loginData.email });

    if (!user) {
        throw new Error('Email or password is invalid.');
    }

    // check password
    const isValid = await bcrypt.compare(loginData.password, user.password);

    if (!isValid) {
        throw new Error('Email or password is invalid.');
    }

    // generate token
};