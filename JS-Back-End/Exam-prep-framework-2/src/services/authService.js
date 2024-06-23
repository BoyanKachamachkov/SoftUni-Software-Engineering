const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('../lib/jsonwebtoken');
const { SECRET } = require('../config');

exports.register = async (userData) => {

    console.log(userData);
    if (userData.password !== userData.rePassword) {
        throw new Error('Passwords do not match!');
    }

    const user = await User.findOne({ email: userData.email });
    if (user) {
        throw new Error('User with this email already exists!');
    }

    const createdUser = await User.create(userData);

    const token = generateToken(createdUser);
    return token;
};

exports.login = async (loginData) => {
    const user = await User.findOne({ email: loginData.email });
    console.log(user);

    if (!user) {
        throw new Error('Email or password are invalid.');
    }

    console.log(user);

    const isValid = await bcrypt.compare(loginData.password, user.password);

    if (!isValid) {
        throw new Error('Email or password are invalid.');
    }

    const token = await generateToken(user);
    return token;
};

async function generateToken(user) {
    const payload = {
        _id: user._id,
        email: user.email,
    };
    const token = await jwt.sign(payload, SECRET, { expiresIn: '2h' });

    return token;
}