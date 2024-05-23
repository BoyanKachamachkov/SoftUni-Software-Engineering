const router = require('express').Router(); // create express instance and use router from it
const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');


router.use(homeController);
router.use(movieController);

router.get('*', (req, res) => {
    res.redirect('/404');
});

module.exports = router;