const express = require('express'); //import express

const app = express(); // raise express instance of a server

// method + path couple ---> handler
app.get('/', (req, res) => {
    res.header({
        'content-type': 'text/plain'
    });

    res.status(200).send('<h1>Hey</h1>');
});

app.listen(5005, () => {
    console.log('listening on 5005');
});