const router = require('express').Router(); // create express instance and use router from it
const homeController = require('./controllers/homeController');

router.use(homeController)



module.exports = router;