const mongoose = require('mongoose');


const stonesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLength: [2, 'Name should be at least 2 characters long.'],
        lowercase: true,

    },
    category: {
        type: String,
        required: true,
        minLength: [3, 'Category should be at least 3 characters long.']
    },
    color: {
        type: String,
        required: true,
        minLength: [2, 'Color should be at least 2 characters long.']
    },
    image: {
        type: String,
        required: true,
        match: /^https?:\/\//
    },
    location: {
        type: String,
        required: true,
        minLength: [5, 'Location must be at least 5 characaters.'],
        maxLength: [15, 'Location must be below 15 characters.']
    },
    formula: {
        type: String,
        required: true,
        minLength: [3, 'Formula must be at least 3 characaters.'],
        maxLength: [30, 'Formula must be below 30 characters.']
    },
    description: {
        type: String,
        required: true,
        minLength: [10, 'Description must be at least 10 characaters.'],
    },
    likedList: [{
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

stonesSchema.pre('save', function () {
    if (!this.createdAt) {
        this.createdAt = Date.now();
    }
});

const Stones = mongoose.model('Stones', stonesSchema);

module.exports = Stones;