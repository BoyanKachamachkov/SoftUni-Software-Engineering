const http = require('http');
const { homeHandler } = require('./handlers/home');


const routes = {
    '/': homeHandler,
    'index.html': homeHandler
};


const server = http.createServer((req, res) => {
    const route = routes[req.url];
    if (req.url == '/' || req.url == '/index.html') {
        homeHandler(req, res);
    } else {
        res.writeHead(404, [
            'Content-type', 'text/plaint'
        ]);
    }
    res.statusCode = 204;
    res.end();
}).listen(3000);