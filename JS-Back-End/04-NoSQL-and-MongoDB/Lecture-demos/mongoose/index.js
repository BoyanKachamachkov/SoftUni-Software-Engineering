// 1. take mongoose from the package mongoose
const mongoose = require('mongoose');
const Student = require('./models/Student')

// 2. connect to DB (in a specific DB - Students)
mongoose.connect('mongodb://localhost:27017/Students')
    .then(() => {
        console.log('DB connected successfully');
    });


// 3. instance of our model created in MEMORY, BUT NOT SAVED IN DB YET!
const student = new Student({
    name: 'Al',
    age: 17
});

// console.log(student);

// CREATE (2 options)
// 4. save in DB
// student.save()
//     .then((createdStudent) => {
//         console.log(createdStudent);
//         console.log('Student saved');
//     }); //returns promise


// // Alternative CREATE
Student.create({
    name: 'boya',
    age: 15
}).then(data => console.log(data));

// (READ , GET data)
Student.find()
    .then(students => {
        students.forEach(s => s.logInfo());

    });

// MONGODB query with gte operator
Student.find({ age: { $gte: 19 } })
    .then(res => {
        res.forEach(s => console.log(s.description));
    });