const express = require('express');
const routes = require('./routes');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose')

const app = express();

app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

mongoose.connect('mongodb://localhost:27017/course-book2')

app.listen(3000, () => console.log('Server is listening on port:3000...'));