const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-type', 'text/html');

    let path = './views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;

        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

        // redirect
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end()
            break;

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }


    // send an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        }
        res.write(data); // can also use res.end(data) does same when 1
        res.end();
    });

});

server.listen(3000, 'localhost', () => {
    console.log('i am listening on port 300');
});