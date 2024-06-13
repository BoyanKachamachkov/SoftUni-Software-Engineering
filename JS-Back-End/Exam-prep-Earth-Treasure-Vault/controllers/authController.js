const router = require('express').Router();
const { getErrorMessage } = require('../lib/getErrorMessage');
const { isAuth, isGuest } = require('../middlewares/authMiddleware');
const authService = require('../services/authService');

router.get('/register', isGuest, (req, res) => {

    res.render('auth/register');
});

router.post('/register', isGuest, async (req, res) => {
    const regData = req.body;

    try {
        const token = await authService.register(regData);

        res.cookie('auth', token);
        res.redirect('/');


    } catch (err) {
        res.render('auth/register', { ...regData, error: getErrorMessage(err) });
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
    } catch (error) {
        console.log(error);
        res.render('auth/login', { ...loginData, error });
    }

});

router.get('/logout', isAuth, (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

module.exports = router;