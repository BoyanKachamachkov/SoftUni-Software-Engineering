// Какво да сложим тук?
// цялата логика по създаване на схемата
// + всички допълнения до създаването на модела
const mongoose = require('mongoose');


// ----------------------------------------------------------------------
// Mongoose models (format of data)

// 1. use Schema class to create new instance of Schema for the specific model
// defines the type of data
const studentSchema = new mongoose.Schema({
    name: String,
    age: Number,
});

// Validation at SCHEMA LEVEL
// const studentSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         minLength: [3, 'Minimum name 3'],
//         maxLength: [5, 'Maximum name 5']
//     },
//     age: {
//         type: Number,
//         required: true,
//         min: [12, 'Age must be between 12-120'],  // could be val or arr of [val,msg]
//         max: 120,
//     },
// });

// SCHEMA MODELS METHODs (custom)
studentSchema.methods.logInfo = function () {
    console.log(`Hello, I'm ${this.name}, and I'm ${this.age} years old.`);

};

// Virtual properties, do not exsist in DB, combination/calculation of other exsisting props.
studentSchema.virtual('description').get(function () {
    return `Name: ${this.name}. Age: ${this.age}.`;
});

// Validation
// studentSchema.path('age').validate(function () {
//     return this.age > 0 && this.age < 120;
// }, 'Age should be between 0 and 120 years');

// 2. Create model based on Schema? Use upper letter (like class) for naming
// pass name (usually like const) and then the SCHEMA
const Student = mongoose.model('Student', studentSchema);



module.exports = Student;