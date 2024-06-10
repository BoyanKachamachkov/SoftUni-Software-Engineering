const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const courseService = require('../services/courseService');
const userService = require('../services/userService');

router.get('/', async (req, res) => {
    const latestCourses = await courseService.getLatest().lean();
    console.log(latestCourses);
    res.render('home', { latestCourses });
});


router.get('/profile', isAuth, async (req, res) => {
    const user = await userService.getInfo(req.user._id).lean();
    const createdCount = user.createdCourses.length;
    const signedCount = user.signedUpCourses.length;

    res.render('profile', { user, createdCount, signedCount });
});


module.exports = router;