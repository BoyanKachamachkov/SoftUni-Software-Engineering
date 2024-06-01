const router = require('express').Router(); // create express instance and use router from it
const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');
const castController = require('./controllers/castController');
const authController = require('./controllers/authController');


router.use(homeController);
router.use(movieController);
router.use('/auth', authController);
router.use('/cast', castController);

router.get('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;