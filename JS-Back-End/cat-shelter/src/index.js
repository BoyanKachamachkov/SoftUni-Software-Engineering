const http = require('http');

const { homeHandler } = require('./handlers/home');
const { errorHandler } = require('./handlers/404');
const { staticFileHander } = require('./handlers/static');
const { addBreedHandler } = require('./handlers/addBreed');

const routes = {
    '/': homeHandler,
    '/index.html': homeHandler,
    '/cats/add-breed': addBreedHandler
};

http.createServer((req, res) => {
    const route = routes[req.url]; //if we have match, it returns func
    if (typeof route == 'function') {
        route(req, res);
        return;
    } else if (staticFileHander(req, res)) {
        return;
    }

    // we either call html route or static file or 404 if we reach 21
    errorHandler(req, res);

}).listen(3000);