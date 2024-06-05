const router = require('express').Router();
const authService = require('../services/authService');


router.get('/register', (req, res) => {
    res.render('auth/register');
});


router.get('/login', (req, res) => {
    res.render('auth/login');
});


router.post('/register', async (req, res) => {
    // get user data
    const userData = req.body;

    // utilize service to create user
    await authService.register(userData);

    // redirect
    res.redirect('/auth/login')
});


module.exports = router;