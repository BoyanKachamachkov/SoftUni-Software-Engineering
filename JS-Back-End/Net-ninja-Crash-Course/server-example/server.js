const http = require('http');
const fs = require('fs');



const server = http.createServer((req, res) => {

    console.log(req.url, req.method);

    // set header content type
    res.setHeader('Content-type', 'text/html');

    // send an html file
    fs.readFile('./views/index.html', (err, data) => {
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