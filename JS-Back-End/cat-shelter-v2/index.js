const http = require('http');
const port = 3001;

http.createServer((req, res) => {
    res.writeHead(200, [
        'Content-Type', 'text/plain'
    ]);

    res.write('Hello JS world');
    res.end();

}).listen(port);