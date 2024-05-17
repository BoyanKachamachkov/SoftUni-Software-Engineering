const http = require('http');
const { homeHandler } = require('./handlers/home');
const { errorHandler } = require('./handlers/404');



http.createServer((req, res) => {
    if (req.url == '/' || req.url == '/index.html') {
        homeHandler(req, res);
    } else {
        errorHandler(req, res);
    }

}).listen(3000);