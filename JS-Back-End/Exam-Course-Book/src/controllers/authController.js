const router = require('express').Router();
const authService = require('../services/authService');


router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const regData = req.body;

    await authService.register(regData);

    res.redirect('/login');

});


router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res) => {
    const loginData = req.body;

    const token = await authService.login(loginData);

    res.cookie('auth', token);
    res.redirect('/');
});


router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

module.exports = router;
