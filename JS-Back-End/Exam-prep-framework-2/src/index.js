const express = require('express');
const routes = require('./routes')

const app = express();

// MWs
app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(routes)




app.listen(3000, () => console.log('Backend is listening on port 3000...'));