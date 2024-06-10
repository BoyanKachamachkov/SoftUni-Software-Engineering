const Course = require('../models/Course');
const User = require('../models/User');

exports.create = async (userId, courseData) => {
    // create new course with the ID of the user
    const createdCourse = await Course.create({
        owner: userId,
        ...courseData
    });

    // at this point our new course has a unique ID which we can use for the double relation
    await User.findByIdAndUpdate(userId, { $push: { createdCourses: createdCourse._id } });

    return createdCourse;
};

exports.getAll = () => Course.find();

exports.getOne = (courseId) => Course.findById(courseId);

exports.getOneDetailed = (courseId) => this.getOne(courseId).populate('owner').populate('signUpList');

exports.delete = (courseId) => Course.findByIdAndDelete(courseId);

exports.edit = (courseId, courseData) => Course.findByIdAndUpdate(courseId, courseData, { runValidators: true });

exports.getLatest = () => Course.find().sort({ createdAt: -1 }).limit(3);

exports.signUp = async (courseId, userId) => {
    await Course.findByIdAndUpdate(courseId, { $push: { signUpList: userId } });
    await User.findByIdAndUpdate(userId, { $push: { signedUpCourses: courseId } });
};