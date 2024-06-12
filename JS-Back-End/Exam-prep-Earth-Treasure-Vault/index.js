const express = require('express');
const handlebars = require('express-handlebars');
const routes = require('./routes');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const { authMiddleware } = require('./middlewares/authMiddleware');

const app = express();

app.use(express.static('./static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));
app.use(cookieParser());

app.use(authMiddleware);
app.use(routes);

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

mongoose.connect('mongodb://localhost:27017/earth-treasure-vault');

app.listen(3000, () => console.log('Server is listening on port 3000...'));
