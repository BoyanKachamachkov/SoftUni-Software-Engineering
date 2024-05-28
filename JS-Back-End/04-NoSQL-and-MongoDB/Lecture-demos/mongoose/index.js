// 1. take mongoose from the package mongoose
const mongoose = require('mongoose');
const Student = require('./models/Student');

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
// Student.create({
//     name: 'boya',
//     age: 15
// }).then(data => console.log(data));

// (READ , GET all data)
// Student.find()
//     .then(students => {
//         students.forEach(s => s.logInfo());

//     });

// GET ALL DATA with filter
// MONGODB query with gte operator
Student.find({ age: { $gte: 19 } })
    .then(res => {
        res.forEach(s => console.log(s.description));
    });

// GET SINGLE RECORD (1st that answers filter requirements)
// find 1 without reqs
// Student.findOne()
//     .then(student => console.log(`FindOne record ${student}`));

// find 1 with reqs
Student.findOne({ name: { $eq: 'boya' } })
    .then(student => console.log(`FindOne record ${student}`));

Student.findById('66558edf98c5fa58b8afd4df')
    .then(res => {
        console.log(`Find by ID ${res}`);
    });


// UPDATE (one, many, byId)
Student.updateOne({ name: 'boya' }, { $set: { age: 16 } })
    .then(res => console.log(`Update One ${res}`));


Student.updateMany({ age: 16 }, { $set: { age: 13 } })
    .then(res => {
        console.log('updateMany');
        console.log(res);
    });

Student.findByIdAndUpdate('66558edf98c5fa58b8afd4df', { name: 'Boyan' })
    .then(res => {
        console.log(`find by id and update ${res}`);
    });