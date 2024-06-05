const express = require('express');
const routes = require('./routes');
const handlebars = require('express-handlebars');
const path = require('path')

const app = express();

// config HB
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs')
app.set('views', path.resolve('src/views'))

// MWs
app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);


app.listen(3000, () => console.log('Backend is listening on port 3000...'));