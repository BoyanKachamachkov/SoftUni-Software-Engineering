const router = require('express').Router();
const { getErrorMessage } = require('../lib/getErrorMessage');
const volcanoesService = require('../services/volcanoesService');


router.get('/create', (req, res) => {
    res.render('volcanoes/create');
});

router.post('/create', async (req, res) => {
    const newVolcano = req.body;

    try {
        await volcanoesService.create(req.user._id, newVolcano);
        res.redirect('/volcanoes/catalog');

    } catch (err) {
        res.render('volcanoes/create', { ...newVolcano, error: getErrorMessage(err) });
    }
});

router.get('/catalog', (req, res) => {
    res.render('volcanoes/catalog');
});


module.exports = router;