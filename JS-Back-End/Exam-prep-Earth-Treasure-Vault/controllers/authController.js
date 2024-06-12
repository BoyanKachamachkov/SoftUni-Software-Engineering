const router = require('express').Router();
const authService = require('../services/authService');

router.get('/register', (req, res) => {

    res.render('register');
});


router.post('/register', async (req, res) => {
    const regData = req.body;

    try {

        await authService.register(regData);

        // TODO: logged-in and redirected to home!
        res.end()

    } catch (error) {
        console.log(error);
    }


});



module.exports = router;