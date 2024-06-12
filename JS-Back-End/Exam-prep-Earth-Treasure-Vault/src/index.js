const express = require('express');
const routes = require('../src/routes');

const app = express();

app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);



app.listen(3000, () => console.log('Server is listening on port 3000...'));