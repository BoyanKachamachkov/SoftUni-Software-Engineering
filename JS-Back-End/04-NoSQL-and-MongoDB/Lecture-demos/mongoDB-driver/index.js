// driver is only used to connect to mongoDB
const { MongoClient } = require('mongodb');

// const MongoClient = mongodb.MongoClient();

// use connection string to connect to a given DB
const client = new MongoClient('mongodb://localhost:27017/');

async function run() {

    const db = client.db('Students');
    const collection = db.collection('students');

    // mongoDB queries
    const allStudentsCursor = await collection.find()
    const students = await allStudentsCursor.toArray();

    console.log(students);
}

run();