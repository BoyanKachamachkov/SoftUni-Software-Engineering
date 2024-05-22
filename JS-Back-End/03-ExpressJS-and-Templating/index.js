const express = require('express'); //import express

const app = express(); // raise express instance of a server
app.listen(5005, () => {
    console.log('listening on 5005');
});
// method + path couple ---> handler
app.get('/', (req, res) => {
    res.header({
        'content-type': 'text/plain'
    });

    res.status(200).send('<h1>Hey</h1>');
});

app.get('/cats', (req, res) => {
    res.send('cat has been');
});

app.post('/cats', (req, res) => {
    res.send('created a cat');
});

// rarely used, for ALL methods response!
app.all('/dogs', (req, res) => {
    res.send('this is an app for cats');
});

app.get(/.*dogs/, (req, res) => {
    res.status(301).send('Regexp example');
});

// wildcard PATH *
app.all('*', (req, res) => {
    res.status(404).send('Page not found - Error 404');
});