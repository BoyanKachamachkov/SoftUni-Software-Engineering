const express = require('express');

const app = express();
const port = 5007;

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.listen(port, () => {
    console.log(`ExpressJS Server is listening on ${port}...`);
});