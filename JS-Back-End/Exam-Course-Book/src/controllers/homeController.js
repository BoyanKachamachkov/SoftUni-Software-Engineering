const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const courseService = require('../services/courseService');

router.get('/', async (req, res) => {
    const latestCourses = await courseService.getLatest().lean();
    console.log(latestCourses)
    res.render('home', { latestCourses });
});



module.exports = router;