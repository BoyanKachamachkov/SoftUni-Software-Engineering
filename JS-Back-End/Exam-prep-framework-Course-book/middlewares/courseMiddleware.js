const courseService = require('../services/courseService');

async function isCourseOwner(req, res, next) {
    const course = await courseService.getOne(req.params.courseId).lean();

    if (course.owner != req.user?._id) {
        return res.redirect(`/courses/${req.params.courseId}/details`);
    }
    req.course = course; //attach course to req object to re-use it in edit
    next();
}


exports.isCourseOwner = isCourseOwner;