const router = require('express').Router();
const { isGuest, isAuth } = require('../middlewares/authMiddleware');
const authService = require('../services/authService');
const { getErrorMessage } = require('../util/errorUtils');


router.get('/register', isGuest, (req, res) => {
    res.render('auth/register');
});

router.post('/register', isGuest, async (req, res) => {

    const userData = req.body;

    try {

        const token = await authService.register(userData);

        res.cookie('auth', token);
        res.redirect('/');

    } catch (err) {
        res.render('auth/register', { error: getErrorMessage(err), ...userData });
    }
});


router.get('/login', isGuest, (req, res) => {
    res.render('auth/login');
});

router.post('/login', isGuest, async (req, res) => {

    const loginData = req.body;

    try {

        const token = await authService.login(loginData);

        res.cookie('auth', token);
        res.redirect('/');


    } catch (err) {
        res.render('auth/login', { error: getErrorMessage(err), ...loginData });
    }

});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});


module.exports = router;