const express = require('express'); //import express
const path = require('path');

const app = express(); // raise express instance of a server
app.listen(5005, () => {
    console.log('listening on 5005');
});
// method + path couple ---> handler
app.get('/', (req, res) => {
    res.header({
        'content-type': 'text/html'
    });

    res.status(200).send('<h1>Hey</h1>');
});

app.get('/cats', (req, res) => {
    res.send('cat has been');
});

app.post('/cats', (req, res, next) => {

    // MIDDLEWARE added , do some logic
    console.log('creating new cat');

    if (Math.random() < 0.5) {
        return res.send('You don\'t have luck!');

    };
    next(); //always function next at the end to pass req,res to handler

}, (req, res) => {
    res.send('created a cat');
});

// rarely used, for ALL methods response!
app.all('/dogs', (req, res) => {
    res.send('this is an app for cats');
});

app.get(/.*dogs/, (req, res) => {
    res.status(301).send('Regexp example');
});

// // wildcard PATH *
// app.all('*', (req, res) => {
//     res.status(404).send('Page not found - Error 404');
// });


// Extracting params
// this page will answer to anything that has cats/tommy or any random name
app.get('/cats/:catName/:breed', (req, res) => {
    console.log(req.params);
    const currentCatName = req.params.catName; //extract variable from params
    res.send(`This a page for ${currentCatName}. He/She is of ${req.params.breed} breed!`);
});

// ROUTER RESPONSES examples
app.get('/cats/download', (req, res) => {

    // from current DIR , go to images folder and find cat.jpeg and connect their path into something that works!
    const imagePath = path.join(__dirname, 'images', 'cat.jpeg');
    // const imagePath = path.resolve('.', 'images', 'cats.jpeg');

    // res.download(imagePath); // server returns the file to client to be saved

    res.sendFile(imagePath); // visualize pic on client

    // res.attachment(imagePath) does not put res.end() automatically
    // res.json()
    // res.redirect('/cats')
});