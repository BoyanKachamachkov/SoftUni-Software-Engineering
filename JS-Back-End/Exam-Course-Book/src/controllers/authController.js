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

router.post('/login', (req, res) => {
    const loginData = req.body

    console.log(loginData)

    res.end();
});

module.exports = router;