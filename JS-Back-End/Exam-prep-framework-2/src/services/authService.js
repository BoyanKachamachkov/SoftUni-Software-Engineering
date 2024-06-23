const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../config');

exports.register = async (userData) => {
    if (userData.password !== userData.rePassword) {
        throw new Error('Passwords do not match!');
    }

    const user = await User.findOne({ email: userData.email });
    if (user) {
        throw new Error('User with this email already exists!');
    }

    const createdUser = await User.create(userData);

    const token = await generateToken(createdUser)
    return token;
};

exports.login = async ({ email, password }) => {
    // get user from db
    const user = await User.findOne({ email: email });

    // check user
    if (!user) {
        throw new Error('Email or password are invalid.');
    }

    // check pw
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
        throw new Error('Email or password are invalid.');
    }

    // generate token
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email,

    };
    const token = await jwt.sign(payload, SECRET, { expiresIn: '2h' });

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