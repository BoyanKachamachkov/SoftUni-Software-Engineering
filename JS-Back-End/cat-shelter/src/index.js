const http = require('http');
const { homeHandler } = require('./handlers/home');
const { errorHandler } = require('./handlers/404');

const routes = {
    '/': homeHandler,
    '/index.html': homeHandler,
};

http.createServer((req, res) => {
    const route = routes[req.url]; //if we have match, it returns func
    if (typeof route == 'function') {
        route(req, res);
    } else {
        errorHandler(req, res);
    }
}).listen(3000);