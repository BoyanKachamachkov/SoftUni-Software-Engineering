const router = require('express').Router();
const authService = require('../services/authService');
const { getErrorMessage } = require('../utils/errorUtils');
const { isGuest } = require('../middlewares/authMiddleware');


router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res) => {
    const regData = req.body;

    try {
        await authService.register(regData);

        res.redirect('/login');

    } catch (err) {
        res.render('register', { ...regData, error: getErrorMessage(err) });
    }

});

// you must be guest to use logins
router.get('/login', isGuest, (req, res) => {
    res.render('login');
});

router.post('/login', isGuest, async (req, res) => {
    const loginData = req.body;

    try {
        const token = await authService.login(loginData);

        res.cookie('auth', token);
        res.redirect('/');
    } catch (err) {
        res.render('login', { ...loginData, error: getErrorMessage(err) });
    }

});


router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

module.exports = router;
