const { isAuth } = require('../middlewares/authMiddleware');
const stonesService = require('../services/stonesService');

const router = require('express').Router();


router.get('/', async (req, res) => {

    const latestStones = await stonesService.getLatest().lean();
    res.render('home', { latestStones });

});




module.exports = router;