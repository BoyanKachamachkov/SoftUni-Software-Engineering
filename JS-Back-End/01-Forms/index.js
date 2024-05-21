const http = require('http');
const qs = require('querystring');
const path = require('path');
const { EOL } = require('os');
const fs = require('fs');

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

        req.on('close', () => {
            // 1. use buffer
            const dataBuffer = Buffer.concat(body);
            // 2. create binary string with buffer
            const data = dataBuffer.toString('binary');

            // 3.
            const boundary = req.headers['content-type'].split('boundary=').at(1);
            const parts = data.split(`--${boundary}`);

            // 4. split by 2 end lines depending on OS with OS module
            const [meta, imageData] = parts[3].split(EOL + EOL);

            // 5. extract file name from metaData
            const fileName = meta.match(/filename="(.+)"/)[1]; //return the group (1), which is the file name.

            const savePath = path.join(__dirname, 'uploads', fileName); //save file here

            // 6. save picture
            fs.writeFile(savePath, imageData, 'binary', (err) => {
                if (err) {
                    return res.end();
                }
                console.log('Image uploaded successfully!');
                res.writeHead(302, {
                    'location': '/'
                });
                res.end();
            });


        });
    }
}).listen(5001);
console.log('Server is listening on port: 5001');