// 1. take mongoose from the package mongoose
const mongoose = require('mongoose');

// 2. connect to DB (in a specific DB - Students)
mongoose.connect('mongodb://localhost:27017/Students')
    .then(() => {
        console.log('DB connected successfully')
    })