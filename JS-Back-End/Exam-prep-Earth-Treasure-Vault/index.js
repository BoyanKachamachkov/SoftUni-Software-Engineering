const express = require('express');
const handlebars = require('express-handlebars')

const app = express();

app.use(express.static('./static'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static('static'));

app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));

app.set('view engine', 'hbs');

app.get('/', (req,res) => {
    res.render('home')
})

app.listen(3000, () => console.log('Server is listening on port 3000...'));
