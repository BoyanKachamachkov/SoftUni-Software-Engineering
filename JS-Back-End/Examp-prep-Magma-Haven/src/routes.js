const router = require('express').Router();

const homeController = require('../src/controllers/homeController');
const authController = require('../src/controllers/authController');
const volcanoesController = require('./controllers/volcanoesController');


router.use(homeController);
router.use('/auth', authController);
router.use('/volcanoes', volcanoesController);



router.all('*', (req, res) => {
    res.render('404');
});
module.exports = router;