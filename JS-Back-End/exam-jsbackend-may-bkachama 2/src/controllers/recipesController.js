const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../util/errorUtils');
const recipesService = require('../services/recipesService');


router.get('/', async (req, res) => {

    const recipes = await recipesService.getAll().lean();

    res.render('recipes/catalog', { recipes });
});


router.get('/create', isAuth, (req, res) => {

    res.render('recipes/create');
});

router.post('/create', isAuth, async (req, res) => {

    const newRecipe = req.body;

    try {

        await recipesService.create(req.user._id, newRecipe);

        res.redirect('/catalog');

    } catch (err) {

        res.render('recipes/create', { error: getErrorMessage(err), ...newRecipe });

    }
});


router.get('/:recipeId', async (req, res) => {

    const recipe = await recipesService.getOne(req.params.recipeId).lean();
    const isOwner = recipe.owner._id == req.user?._id;
    const hasRecommended = recipe.recommendList.some(user => user._id == req.user?._id);
    const recommendationsCount = recipe.recommendList.length;


    res.render('recipes/details', { ...recipe, isOwner, hasRecommended, recommendationsCount });
});


router.get('/recommend/:recipeId', async (req, res) => {

    const recipe = await recipesService.getOne(req.params.recipeId).lean();

    if (recipe.owner == req.user?._id) {
        return res.redirect(`/catalog/${req.params.recipeId}`);
    }

    await recipesService.recommend(req.params.recipeId, req.user._id);

    res.redirect(`/catalog/${req.params.recipeId}`);
});

router.get('/delete/:recipeId', isRecipeOwner, async (req, res) => {
    await recipesService.delete(req.params.recipeId);

    res.redirect('/catalog');
});

router.get('/edit/:recipeId', isRecipeOwner, async (req, res) => {
    const recipe = await recipesService.getOne(req.params.recipeId).lean();

    res.render('recipes/edit', { ...recipe });
});

router.post('/edit/:recipeId', isRecipeOwner, async (req, res) => {
    const editData = req.body;

    try {
        await recipesService.edit(req.params.recipeId, editData);

        res.redirect(`/catalog/${req.params.recipeId}`);
    } catch (err) {
        res.render('recipes/edit', { error: getErrorMessage(err), ...editData });
    }
});

router.get('/search', async (req, res) => {
    // const recipes = await recipesService.search(req.query.search);
    res.render('recipes/search');
});


async function isRecipeOwner(req, res, next) {
    const recipe = await recipesService.getOne(req.params.recipeId).lean();

    if (recipe.owner != req.user?._id) {
        return res.redirect(`/catalog/${req.params.recipeId}`);
    }

    next();
}



module.exports = router;