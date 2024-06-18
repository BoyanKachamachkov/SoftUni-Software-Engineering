const mongoose = require('mongoose');

const volcanoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required.'],
        minLength: ['2', 'The name should be at least 2 characters long.']
    },
    location: {
        type: String,
        required: [true, 'location is required.'],
        minLength: ['3', 'The location should be at least 3 characters long.']
    },
    elevation: {
        type: String,
        required: [true, 'Elevation is required.'],
        minValue: 0
    },
    lastErruption: {
        type: Number,
        required: [true, 'Last erruption year is required.'],
        minValue: 0,
        maxValue: 2024,
    },
    image: {
        type: String,
        required: [true, 'Image is required.'],
        match: /^https?:\/\//
    },
    typeVolcano: {
        type: String,
        required: [true, 'Type of Volcano is required.'],

    },
    description: {
        type: String,
        required: [true, 'Description is required.'],
        minLength: ['10', 'The description should be at least 10 characters long.']
    },
    voteList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
});

const Volcano = mongoose.model('Volcano', volcanoSchema);

module.exports = Volcano;