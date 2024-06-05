const router = require('express').Router();
const authService = require('../services/authService');
const { getErrorMessage } = require('../util/errorUtils');


router.get('/register', (req, res) => {
    res.render('auth/register');
});


router.get('/login', (req, res) => {
    res.render('auth/login');
});


router.post('/register', async (req, res) => {


    try {
        // get user data
        const userData = req.body;

        // utilize service to create user
        await authService.register(userData);

        // redirect
        res.redirect('/auth/login');

    } catch (err) {
        res.render('auth/register', { error: getErrorMessage(err) });
    }
});

router.post('/login', async (req, res) => {

    try {
        // get login Data
        const loginData = req.body;

        // token
        const token = await authService.login(loginData);

        res.cookie('auth', token);
        res.redirect('/');

    } catch (err) {
        res.render('/auth/login', { error: getErrorMessage(err) });
    }

});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});


module.exports = router;