const router = require('express').Router();

const homeController = require('../src/controllers/homeController');


router.use(homeController);



module.exports = router;