const { isAuth } = require('../middlewares/authMiddleware');

const router = require('express').Router();


router.get('/', (req, res) => {
    res.render('home');
});

router.get('/authorize-test', isAuth, (req, res) => {
    res.send('You are auth')
});


module.exports = router;