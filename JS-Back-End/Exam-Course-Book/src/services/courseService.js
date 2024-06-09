const Course = require('../models/Course');
const User = require('../models/User');

exports.create = async (userId, courseData) => {

    // we must be sure we have owner, so await SUCCESSFUL creation
    const createdCourse = await Course.create({
        owner: userId,
        ...courseData
    });

    // we have a course! Update craeted courses for given user with ID of the course.
    await User.findByIdAndUpdate(userId, { $push: { createdCourses: createdCourse._id } });

    return createdCourse;
};