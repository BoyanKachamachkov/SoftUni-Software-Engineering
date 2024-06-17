const router = require('express').Router();
const { getErrorMessage } = require('../lib/getErrorMessage');
const authService = require('../services/authService');

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const regData = req.body;

    try {
        const token = await authService.register(regData);

        res.cookie('auth', token);
        res.redirect('/');

    } catch (err) {
        res.render('auth/register', { ...regData, error: getErrorMessage(err) });

    }
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', async (req, res) => {
    const loginData = req.body;

    try {
        const token = await authService.login(loginData);

        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        res.render('auth/login', { ...loginData, error: getErrorMessage(err) });

    }
});




module.exports = router;