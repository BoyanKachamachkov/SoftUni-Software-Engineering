const { isAuth } = require('../middlewares/authMiddleware');
const courseService = require('../services/courseService');
const router = require('express').Router();
const userService = require('../services/userService');



router.get('/', async (req, res) => {

    const latestCourses = await courseService.getLatest().lean();

    res.render('home', { latestCourses });
});


router.get('/profile', isAuth, async (req, res) => {
    const user = await userService.getInfo(req.user._id).lean();

    const createdCoursesCount = user.createdCourses.length;
    const signedUpCoursesCount = user.signedUpCourses.length;



    res.render('profile', { user, createdCoursesCount, signedUpCoursesCount });
});





module.exports = router;