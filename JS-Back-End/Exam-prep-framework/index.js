const express = require('express');
const routes = require('./routes');
const handlebars = require('express-handlebars');

const app = express();

app.use(routes);
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false })); //data from req comes to req.body

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
app.set('view engine', 'hbs')

app.listen(3000, () => console.log(`App is listening on port 3000...`));