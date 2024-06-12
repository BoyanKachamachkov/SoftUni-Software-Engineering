const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../config');

exports.register = async (regData) => {
    if (regData.password !== regData.rePassword) {
        throw new Error('Passwords do not match!');
    }

    const user = await User.findOne({ email: regData.email });

    if (user) {
        throw new error('User with that email already exists!');
    }

    const createdUser = await User.create(regData);

    const token = await generateToken(createdUser);
    return token;
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

    const token = await generateToken(user);

    return token;

};

async function generateToken(user) {
    const payload = {
        _id: user._id,
        email: user.email,
    };
    const token = jwt.sign(payload, SECRET, { expiresIn: '2h' });

    return token;
}