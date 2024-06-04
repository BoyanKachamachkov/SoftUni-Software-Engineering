const router = require('express').Router();
const authService = require('../services/authService');
const { getErrorMessage } = require('./util/errorUtils');


router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {

    try {
        const userData = req.body;
        await authService.register(userData);

        res.redirect('/auth/login');
    } catch (err) {
        res.render('auth/register', { error: getErrorMessage(err) });
    }

});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {

    try {
        const loginData = req.body;
        const token = await authService.login(loginData);

        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        res.render('auth/login', { error: getErrorMessage(err) });
    }

});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');

    res.redirect('/');
});






module.exports = router;