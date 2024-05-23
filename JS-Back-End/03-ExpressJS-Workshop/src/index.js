const express = require('express');
const routes = require('./routes');
const configHandlebars = require('./config/configHandlebars');
const configExpress = require('./config/configExpress');

const app = express();
const port = 5007;

configHandlebars(app);
configExpress(app);

app.use(routes);

app.listen(port, () => {
    console.log(`ExpressJS Server is listening on ${port}...`);
});