const http = require('http');
const qs = require('querystring');

http.createServer((req, res) => {


    if (req.url === '/' && req.method === 'GET') {
        console.log(req.url);
        res.writeHead(200, [
            'Content-Type', 'text/html'
        ]);
        res.write(`
        <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NODEJS forms</title>
</head>

<body>

    <form action="/upload" method="POST" enctype="multipart/form-data">

        <div>
            <label for="username">Username:</label>
            <input type="text" name="username" id="username">
        </div>

        <div>
            <label for="password">Password:</label>
            <input type="password" name="password" id="password">
        </div>

        <div>
        <label for="avatar">Avatar</label>
        <input type="file" name="avatar" id="avatar">
        </div>
        <div>
            <input type="submit" value="Register">
        </div>
    </form>
</body>

</html>
        `);

        res.end();

        // Simple form
    } else if (req.url === '/' && req.method === 'POST') {
        let body = '';

        req.on('data', chunk => {
            body += chunk;
        });

        req.on('close', () => {

            const data = qs.parse(body);
            console.log(body);

            res.end();
        });


        res.end();

    } else if (req.url === '/upload' && req.method === 'POST') {

        const body = [];

        req.on('data', chunk => {
            body.push(chunk);
        });


        res.writeHead(301, {
            'location': '/'
        });
        res.end();

    }

    res.end();


}).listen(5001);
console.log('Server is listening on port: 5001');