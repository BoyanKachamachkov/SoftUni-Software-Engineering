const express = require('express');
const routes = require('./routes');
const handlebars = require('express-handlebars');

const app = express();

app.use(express.static('src/public'));
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', 'src/views')



app.listen(3000, () => console.log('Server is listening on port 3000...'));