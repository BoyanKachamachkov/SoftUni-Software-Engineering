const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('../lib/jwt');

const SECRET = 'qwejjoqwe123jqwoeqioe123qweqwejoi432';

// todo check if users exsists
exports.register = (userData) => { User.create(userData); };

exports.login = async (email, password) => {
    // get user from db
    const user = await User.findOne({ email });

    // check if user exsists?
    if (!user) {
        throw new Error('Username exists or PW are wrong');
    }

    // check if pw is valid
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
        throw new Error('Username or PW are wrong');
    }

    // gen. jwt
    const payload = {
        _id: user._id,
        email: user.email
    };
    const token = await jwt.sign(payload, SECRET, { expiresIn: '2h' });

    // return token
    return token;
};
