const router = require('express').Router();
const authService = require('../services/authService');

router.get('/register', (req, res) => {

    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const regData = req.body;

    try {
        await authService.register(regData);

        // TODO: logged-in and redirected to home!
        res.end();

    } catch (error) {
        console.log(error);
    }
});

router.get('/login', (req, res) => {
    res.render('auth/login');
});

router.post('/login', (req, res) => {
    const loginData = req.body

    console.log(loginData)
    
    res.end()
});

module.exports = router;