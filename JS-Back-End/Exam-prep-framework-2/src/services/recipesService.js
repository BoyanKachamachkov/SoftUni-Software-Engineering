const User = require('../models/User');
const Recipes = require('../models/Recipes');

exports.create = async (userId, recipesData) => {
    const createdRecipe = await Recipes.create({
        owner: userId,
        ...recipesData
    });

    return createdRecipe;
};


exports.getAll = () => Recipes.find();