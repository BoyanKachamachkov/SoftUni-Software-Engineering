const router = require('express').Router();
const { isAuth } = require('../middlewares/authMiddleware');
const courseService = require('../services/courseService');
const { getErrorMessage } = require('../utils/errorUtils');


router.get('/create', isAuth, (req, res) => {
    res.render('create');
});

router.post('/create', isAuth, async (req, res) => {
    const courseData = req.body;

    try {
        // pass id to make relation
        await courseService.create(req.user._id, courseData);

        res.redirect('/courses');
    } catch (err) {
        res.render('/create', { ...courseData, error: getErrorMessage(err) });
    }
});

router.get('/courses', async (req, res) => {

    // масив от документи го изглаждаме до масив от обекти
    const courses = await courseService.getAll().lean();

    res.render('catalog', { courses });
});


router.get('/courses/:courseId/details', async (req, res) => {

    // The req.params property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /student/:id, then the “id” property is available as req.params.id. This object defaults to {}. 
    const course = await courseService.getOneDetailed(req.params.courseId).lean();

    res.render('details', { ...course });
});


module.exports = router;

