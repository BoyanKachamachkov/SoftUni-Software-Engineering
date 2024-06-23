const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const { getErrorMessage } = require('../util/errorUtils');
const recipesService = require('../services/recipesService');


router.get('/', async (req, res) => {

    const recipes = await recipesService.getAll().lean();

    res.render('recipes/catalog', { recipes });
});


router.get('/create', isAuth, (req, res) => {
    console.log(req.user._id)

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


module.exports = router;