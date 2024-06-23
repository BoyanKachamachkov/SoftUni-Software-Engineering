const mongoose = require('mongoose');


const recipesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 2,
    },
    description: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 100,
    },
    ingredients: {
        type: String,
        required: true,
        minLength: 10,
        maxLength: 200,
    },
    instructions: {
        type: String,
        required: true,
        minLength: 10,
    },
    image: {
        type: String,
        required: true,
        match: /^https?:\/\//
    },
    recommendList: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    createdAt: Date,
});

recipesSchema.pre('save', function () {
    if (!this.createdAt) {
        this.createdAt = Date.now();
    }
});

const Recipes = mongoose.model('Recipes', recipesSchema);


module.exports = Recipes;