const express = require('express'); //1. import


const app = express(); // 2. factory func creates instance of app

const homeHTML = `
<h1>Home Page</h1>
<a href="/">Home</a>
<a href="/catalog">Catalog</a>`;

const catalogHTML = `
<h1>Catalog Page</h1>
<a href="/">Home</a>
<a href="/catalog">Catalog</a>`;

app.get('/', (req, res) => { // 4. work with client
    res.send(homeHTML); // send combines write, writeHead, end... so we can use it only once
});

app.get('/catalog', (req, res) => {
    res.send(catalogHTML);
});
app.get('/catalog/:productId', (req, res) => {
    console.log(req.params.productId);
    res.send(catalogHTML + `<p>Item ID ${req.params.productId}</p>`);

});
app.get('/:catalog/:productId', (req, res) => {
    console.log(req.params.productId);
    res.send(catalogHTML + `<p>Item ID <h2>${req.params.catalog}</h2> ${req.params.productId}</p>`);

});

app.get('*', (req, res) => {
    res.status(404);
    res.send('404 file not found');
});

app.listen(3000, () => {
    console.log('App listening on port 3000');
}); // 3. Run enough to run app