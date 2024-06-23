const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../util/errorUtils');
const recipesService = require('../services/recipesService');


router.get('/', async (req, res) => {

    const recipes = await recipesService.getAll().lean();

    res.render('recipes/catalog', { recipes });
});


router.get('/create', isAuth, (req, res) => {
    console.log(req.user._id);

    res.render('recipes/create');
});

router.post('/create', isAuth, async (req, res) => {

    const newRecipe = req.body;
    console.log(newRecipe);

    try {

        await recipesService.create(req.user._id, newRecipe);

        res.redirect('/catalog');

    } catch (err) {

        res.render('recipes/create', { error: getErrorMessage(err), ...newRecipe });

    }
});


router.get('/:recipeId', async (req, res) => {

    const recipe = await recipesService.getOne(req.params.recipeId).lean();
    console.log(recipe.owner._id);
    const isOwner = recipe.owner._id == req.user?._id;
    const hasRecommended = recipe.recommendList.some(user => user._id == req.user?._id);
    const recommendationsCount = recipe.recommendList.length;


    res.render('recipes/details', { ...recipe, isOwner, hasRecommended, recommendationsCount });
});


router.get('/recommend/:recipeId', async (req, res) => {

    await recipesService.recommend(req.params.recipeId, req.user._id);

    res.redirect(`/catalog/${req.params.recipeId}`);
});


module.exports = router;