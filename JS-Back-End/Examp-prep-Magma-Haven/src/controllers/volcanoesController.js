const router = require('express').Router();
const { getErrorMessage } = require('../lib/getErrorMessage');
const volcanoesService = require('../services/volcanoesService');
const { isAuth } = require('../middlewares/authMiddleware');


router.get('/create', isAuth, (req, res) => {
    res.render('volcanoes/create');
});

router.post('/create', isAuth, async (req, res) => {
    const newVolcano = req.body;

    try {
        await volcanoesService.create(req.user._id, newVolcano);
        res.redirect('/volcanoes/catalog');

    } catch (err) {
        res.render('volcanoes/create', { ...newVolcano, error: getErrorMessage(err) });
    }
});

router.get('/catalog', async (req, res) => {

    const volcanoes = await volcanoesService.getAll().lean();

    res.render('volcanoes/catalog', { volcanoes });
});

router.get('/catalog/:volcanoId', async (req, res) => {

    const volcano = await volcanoesService.getOne(req.params.volcanoId).lean();

    res.render('volcanoes/details', { ...volcano });
});


module.exports = router;