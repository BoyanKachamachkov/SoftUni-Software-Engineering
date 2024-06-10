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
    const course = await courseService.getOneDetailed(req.params.courseId).lean();
    const signedUpUsers = course.signUpList.map(user => user.username).join(', ');
    const isOwner = course.owner._id == req.user?._id;
    const isSigned = course.signUpList.some(user => user._id == req.user?._id);

    res.render('details', { ...course, signedUpUsers, isOwner, isSigned });
});

router.get('/courses/sign-up/:courseId', async (req, res) => {
    // use params for course ID variable , use req.user for user ID
    await courseService.signUp(req.params.courseId, req.user._id);

    res.redirect(`/courses/details/${req.params.courseId}`);

});

router.get('/courses/delete/:courseId', isCourseOwner, async (req, res) => {
    await courseService.delete(req.params.courseId);

    res.redirect('/courses');
});

async function isCourseOwner(req, res, next) {
    const course = await courseService.getOne(req.params.courseId).lean();

    if (course.owner != req.user?._id) {
        return res.redirect(`/courses/details/${req.params.courseId}`);
    }
    req.course = course; //attach course to request object to be used in other F
    next();
}

router.get('/courses/edit/:courseId', isCourseOwner, async (req, res) => {
    res.render('edit', { ...req.course });
});

router.post('/courses/edit/:courseId', isCourseOwner, async (req, res) => {
    const courseData = req.body;

    try {
        await courseService.edit(req.params.courseId, courseData);

        res.redirect(`/courses/details/${req.params.courseId}`);

    } catch (err) {
        res.render('edit', { error: getErrorMessage(err), ...courseData });

    }
});


module.exports = router;

