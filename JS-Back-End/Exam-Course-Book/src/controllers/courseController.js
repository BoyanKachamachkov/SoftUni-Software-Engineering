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


router.get('/courses/details/:courseId', async (req, res) => {

    // The req.params property is an object containing properties mapped to the named route “parameters”. For example, if you have the route /student/:id, then the “id” property is available as req.params.id. This object defaults to {}. 
    const course = await courseService.getOneDetailed(req.params.courseId).lean();

    const signedUpUsers = course.signUpList.map(user => user.username).join(', ');

    res.render('details', { ...course, signedUpUsers });
});

router.get('/courses/sign-up/:courseId', async (req, res) => {


    // use params for course ID variable , use req.user for user ID
    await courseService.signUp(req.params.courseId, req.user._id);

    res.redirect(`/courses/details/${req.params.courseId}`);

});


module.exports = router;

