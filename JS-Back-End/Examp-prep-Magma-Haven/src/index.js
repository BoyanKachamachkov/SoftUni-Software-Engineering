const express = require('express');
const routes = require('../src/routes');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: false }));

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

app.use(routes);

mongoose.connect('mongodb://localhost:27017/magma-haven');

app.listen(3000, () => console.log('App is listening on port 3000...'));