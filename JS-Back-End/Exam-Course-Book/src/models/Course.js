const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: [5, 'The title should be at least 5 characters long.']
    },
    type: {
        type: String,
        required: true,
        minLength: [3, 'The type should be at least 3 characters long.']

    },
    certificate: {
        type: String,
        required: true,
        minLength: [2, 'The certificate should be at least 2 characters long.']

    },
    image: {
        type: String,
        required: true,
        match: [/^https?:\/\//, 'URL should start with HTTP or HTTPS.']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'The description should be at least 10 characters long.']

    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    signUpList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date
    }
});

courseSchema.pre('save', function () {
    if (!this.createdAt) {
        this.createdAt = Date.now();
    }
});

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;