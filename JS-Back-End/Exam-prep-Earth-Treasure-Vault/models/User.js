const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minLength: [10, 'Email should be at least 10 characters long.']
    },
    password: {
        type: String,
        required: true,
        minLength: [4, 'Password should be at least 4 characters long.']

    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: 'Stones'
    }]
});

userSchema.pre('save', async function () {
    this.password = await bcrypt.hash(this.password, 12);
});

const User = mongoose.model('User', userSchema);

module.exports = User;