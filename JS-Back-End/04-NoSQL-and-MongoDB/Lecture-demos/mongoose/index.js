// 1. take mongoose from the package mongoose
const mongoose = require('mongoose');

// 2. connect to DB (in a specific DB - Students)
mongoose.connect('mongodb://localhost:27017/Students')
    .then(() => {
        console.log('DB connected successfully');
    });

// ----------------------------------------------------------------------
// Mongoose models (format of data)

// 1. use Schema class to create new instance of Schema for the specific model
// defines the type of data
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

// SCHEMA MODELS METHODs (custom)
studentSchema.methods.logInfo = function () {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);

};

// Virtual properties, do not exsist in DB, combination/calculation of other exsisting props.
studentSchema.virtual('description').get(function () {
    return `Name: ${this.name}. Age: ${this.age}.`;
});

// 2. Create model based on Schema? Use upper letter (like class) for naming
// pass name (usually like const) and then the SCHEMA
const Student = mongoose.model('Student', studentSchema);

// 3. instance of our model created in MEMORY, BUT NOT SAVED IN DB YET!
const student = new Student({
    name: 'Stamat',
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
//     name: 'Mariyka',
//     age: 19
// }).then(data => console.log(data));

// (READ , GET data)
Student.find()
    .then(students => {
        students.forEach(s => s.logInfo());

    });

// MONGODB query with gte operator
Student.find({ age: { $gte: 19 } })
.then(res =>{
    res.forEach(s => console.log(s.description))
});