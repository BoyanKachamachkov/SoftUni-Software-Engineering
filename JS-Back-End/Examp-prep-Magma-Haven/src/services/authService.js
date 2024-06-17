const User = require('../models/User');


exports.register = async ({ username, email, password, rePassword }) => {
    if (this.password !== this.rePassword) {
        throw new Error('Passwords do not match!');
    }

    const user = await User.findOne({ email });
    if (user) {
        throw new Error('User with that email already exists!');
    }

    const createdUser = await User.create({ username, email, password });
};