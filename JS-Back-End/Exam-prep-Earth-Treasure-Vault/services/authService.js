const User = require('../models/User');


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