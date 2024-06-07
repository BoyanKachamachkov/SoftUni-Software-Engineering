const { isAuth } = require('../middlewares/authMiddleware');
const courseService = require('../services/courseService');
const router = require('express').Router();



router.get('/', async (req, res) => {

    const latestCourses = await courseService.getLatest().lean();

    res.render('home', { latestCourses });
});








module.exports = router;