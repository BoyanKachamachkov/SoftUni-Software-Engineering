const mongoose = require('mongoose');


const recipesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    ingredients: {
        type: String,
        required: true,
    },
    instructions: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
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