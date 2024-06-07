const Course = require("../models/Course");
const User = require('../models/User');

exports.getAll = () => Course.find();

exports.getOne = (courseId) => Course.findById(courseId);
exports.getOneDetailed = (courseId) => this.getOne(courseId).populate('owner');

exports.create = async (userId, courseData) => {
    const createdCourse = await Course.create({
        owner: userId,
        ...courseData,
    });


    // go to user model, find user by id
    // in his arr of created courses add the newly created course ID
    await User.findByIdAndUpdate(userId, { $push: { createdCourses: createdCourse._id } });

    return createdCourse;
};