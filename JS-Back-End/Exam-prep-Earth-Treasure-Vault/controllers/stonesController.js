const router = require('express').Router();
const { getErrorMessage } = require('../lib/getErrorMessage');
const stonesService = require('../services/stonesService');
const { isAuth } = require('../middlewares/authMiddleware');
const Stones = require('../models/Stones');


router.get('/create', isAuth, (req, res) => {
    res.render('stones/create');
});


router.post('/create', isAuth, async (req, res) => {

    const stonesData = req.body;

    try {
        await stonesService.create(stonesData);

        res.redirect('/stones/dashboard');


    } catch (err) {
        res.render('stones/create', { ...stonesData, error: getErrorMessage(err) });
    }
});

router.get('/dashboard', async (req, res) => {

    const stones = await stonesService.getAll().lean();

    res.render('stones/dashboard', { stones });
});


router.get('/search', (req, res) => {
    res.render('stones/search');
});


module.exports = router;