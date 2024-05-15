
const http = require('http'); // потърси ми държавен пакет
const { homeHandler } = require('./handlers/home');

const routes = {
    '/': homeHandler,
    '/index.html': homeHandler
};

http.createServer((req, res) => { //handler, best if in separate file

    const route = routes[req.url];

    if (typeof route == 'function') {
        homeHandler(req, res);
    } else {
        res.writeHead(404, [
            'Content-type', 'text/plaint'
        ]);
        res.write('404 Not Found!');
        res.end();

    }


}).listen(3000);