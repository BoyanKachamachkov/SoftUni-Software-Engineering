const router = require('express').Router();
const { getErrorMessage } = require('../lib/getErrorMessage');
const stonesService = require('../services/stonesService');


router.get('/create', (req, res) => {
    res.render('stones/create');
});


router.post('/create', async (req, res) => {

    const stonesData = req.body;

    try {
        await stonesService.create(stonesData);


    } catch (err) {
        res.render('/create', { ...stonesData, error: getErrorMessage(err) });
    }
});





module.exports = router;