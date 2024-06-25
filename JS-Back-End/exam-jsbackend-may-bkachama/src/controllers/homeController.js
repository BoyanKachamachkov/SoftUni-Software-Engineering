const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const recipesService = require('../services/recipesService');



router.get('/', async (req, res) => {

    const latestRecipes = await recipesService.getLatest().lean();
    res.render('home', { latestRecipes });

});



module.exports = router;