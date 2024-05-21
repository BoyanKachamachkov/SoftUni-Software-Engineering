const url = require('url');
const fs = require('fs');
const path = require('path');
const qs = require('querystring');
const breeds = require('../data/breeds');
const cats = require('../data/cats');
const formidable = require('formidable');

module.exports = (req, res) => {

    const pathname = url.parse(req.url).pathname;
    if (pathname === '/cats/add-cat' && req.method === 'GET') {

        // find html
        let filepath = path.normalize(
            path.join(__dirname, '../views/addCat.html')
        );

        // read it
        fs.readFile(filepath, (err, data) => {
            if (err) {
                console.log(err);
                res.writeHead(404, [
                    'Content-Type', 'text/plain'
                ]);
                res.write('404 not found!');
                res.end();
                return;
            }

            // if found
            res.writeHead(200, [
                'Content-Type', 'text/html'
            ]);
            let catBreedPlaceholder = breeds.map((breed) => `<option value=${breed}">${breed}</option>`);
            let modifiedData = data.toString().replace('{{catBreeds}}', catBreedPlaceholder);
            res.write(modifiedData); //use the html via data
            res.end();
        });


    } else if (pathname === '/cats/add-breed' && req.method === 'GET') {

        // 1. find html
        let filepath = path.normalize(
            path.join(__dirname, '../views/addBreed.html')
        );

        // 2. read it
        fs.readFile(filepath, (err, data) => {
            if (err) {
                console.log(err);

                res.writeHead(404, [
                    'Content-Type', 'text/plain'
                ]);
                res.write('404 not found!');
                res.end();
            }
            // 3. present if no error
            res.writeHead(200, [
                'Content-Type', 'text/html'
            ]);
            res.write(data);
            res.end();
        });
    } else if (pathname === '/cats/add-breed' && req.method === 'POST') {
        // 1.	Parse the incoming data from the form
        let formData = '';

        req.on('data', (data) => {
            formData += data;
        });

        req.on('end', () => {
            let body = qs.parse(formData);

            fs.readFile('./data/breeds.json', (err, data) => {
                if (err) {
                    throw err;
                }
                let breeds = JSON.parse(data);
                breeds.push(body.breed);
                let json = JSON.stringify(breeds);

                fs.writeFile('./data/breeds.json', json, 'utf-8', () => console.log('The breed has been added successfully.'));

            });

            res.writeHead(301, [
                'Location', '/'
            ]);
            res.end();

        });





    } else if (pathname === '/cats/add-cat' && req.method === 'POST') {

        let form = new formidable.IncomingForm();

        form.parse(req, (err, fields, files) => {
            // todo
            if (err) {
                throw err;
            }

            let oldPath = files.upload.path;
            let newPath = path.normalize(path.join())
        });


    } else {
        return true;
    }

};