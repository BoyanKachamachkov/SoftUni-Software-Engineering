const router = require('express').Router(); // create express instance and use router from it
const homeController = require('./controllers/homeController');
const movieController = require('./controllers/movieController');


router.use(homeController);
router.use(movieController);


module.exports = router;