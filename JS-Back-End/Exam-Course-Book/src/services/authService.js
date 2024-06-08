const User = require('../models/User');



exports.register = async (regData) => {
    // TODO: handle registration

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