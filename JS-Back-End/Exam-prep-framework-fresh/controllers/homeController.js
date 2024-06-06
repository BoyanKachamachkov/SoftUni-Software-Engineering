const { isAuth } = require('../middlewares/authMiddleware');

const router = require('express').Router();



router.get('/', (req, res) => {
    res.render('home');
});

// TODO: delete this
router.get('/authorize-test', isAuth, (req, res) => {
    res.send('You are authorized');
});







module.exports = router;