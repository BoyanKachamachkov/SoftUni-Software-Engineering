const express = require('express');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 5006;
app.listen(port, () => console.log(`Listening on ${port}`));

// добавяме нов енджин, откъде го взима? хендълбарс.енджин
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}));
// сетваме промениливата вю енджин да е хбс за цялото приложение
app.set('view engine', 'hbs');

// по принцип търси вюс в дифолтната папка на проекта, ама при нас е в СРЦ, затова трябва да го сетнем
app.set('views', path.join(__dirname, 'views'));


app.get('/', (req, res) => {
    res.render('home', { layout: false });
});

// setup static files
app.use(express.static(path.join(__dirname, 'public')))