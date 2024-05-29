const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
        min: 1900,
        max: 2030
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
    description: {
        type: String,
        required: true,
        maxLength: 1000,
    },
    imageUrl: {
        type: String,
        required: true,
        // http or https?
        // I want it to start with http and 's' can be 0 or 1 time.
        match: /^https?:\/\//
    },
    // Relations (масив от ид-та, ако не сложим масив, ще е само едно ИД)
    casts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Cast'
    }]

});

// movie will be used to name the collection by mongoose
const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;