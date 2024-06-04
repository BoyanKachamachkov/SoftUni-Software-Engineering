const express = require('express');
const routes = require('./routes');
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');

const app = express();

app.use(routes);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false })); //data from req comes to req.body

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');

// TODO: change DB name to reflect project name
mongoose.connect('mongodb://localhost:27017/course-book');

mongoose.connection.on('connected', () => console.log('DB is connected'));
mongoose.connection.on('error', (err) => console.log(err));
mongoose.connection.on('disconnect', () => console.log('DB is disconnected'));

app.listen(3000, () => console.log(`App is listening on port 3000...`));