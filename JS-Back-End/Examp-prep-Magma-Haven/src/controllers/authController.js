const router = require('express').Router();
const authService = require('../services/authService');

router.get('/register', (req, res) => {
    res.render('auth/register');
});

router.post('/register', async (req, res) => {
    const regData = req.body;

    try {

        const user = await authService.register(regData);
        res.render('home');
        // logged and redirected to home page
    } catch (error) {

    }
});





module.exports = router;