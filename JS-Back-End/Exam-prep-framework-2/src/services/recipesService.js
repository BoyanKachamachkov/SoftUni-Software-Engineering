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

exports.getOne = (recipeId) => Recipes.findById(recipeId);


exports.recommend = async (recipeId, userId) => {
    await Recipes.findByIdAndUpdate(recipeId, { $push: { recommendList: userId } });
};

exports.delete = (recipeId) => Recipes.findByIdAndDelete(recipeId);

exports.edit = (recipedId, recipeData) => Recipes.findByIdAndUpdate(recipedId, recipeData, { runValidators: true });

exports.getLatest = () => Recipes.find().sort({ createdAt: -1 }).limit(3);


// exports.search = async (recipeTitle) => {
//     let result = await Recipes.find().lean();

//     if (recipeTitle) {
//         result = result.filter(recipe => recipe.name.toLowerCase().includes(recipeTitle.toLowerCase()));
//     }

//     return result;
// };