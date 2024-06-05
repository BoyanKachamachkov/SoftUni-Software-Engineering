const express = require('express');
const routes = require('./routes');
const handlebars = require('express-handlebars');
const path = require('path');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { authMiddleware } = require('./middlewares/authMiddleware');

const app = express();

// config HB
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.resolve('src/views'));

// MWs
app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(authMiddleware);
app.use(routes);

// TODO: change DB name based on project
mongoose.connect('mongodb://localhost:27017/course-books');

mongoose.connection.on('connected', () => console.log('mongoDB is connected'));
mongoose.connection.on('disconnected', () => console.log('mongoDB is disconnected'));
mongoose.connection.on('error', (err) => console.log(err));

app.listen(3000, () => console.log('Backend is listening on port 3000...'));