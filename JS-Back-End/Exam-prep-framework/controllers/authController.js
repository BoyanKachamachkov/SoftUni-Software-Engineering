const router = require('express').Router();
const authService = require('../services/authService');


router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {

    const userData = req.body;

    console.log(userData)

    await authService.register(userData);

    res.redirect('/auth/login')
});








module.exports = router;