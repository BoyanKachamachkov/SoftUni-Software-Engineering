const express = require('express');
const cookieParser = require('cookie-parser');
const bcrpyt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');

const app = express();

const db = {
    'bo': '$2b$12$R4TI67P7TiwrMuiQiX5Mm.HDZCI/pGC1eyq3d9SJLJKLJ5QPGFkPC'
};
const secret = 'qweqweqweqweqweqweqwe';


app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {

    const token = req.cookies['authJWT'];

    if (!token) {
        return res.send('please login');
    }

    // if token with name authJWT comes check if valid
    const decodedToken = jsonwebtoken.verify(token, secret)
    console.log(decodedToken)
});



// SET cookie
app.get('/login', (req, res) => {
    res.send(`
    <form action="/login" method="POST">
    <label for="username">Username:</label>
    <input type="text" name="username">

    <label for="password">Password:</label>
    <input type="password" name="password">

    <input type="submit" value="login">
</form>
`);
});

// REGISTER example
app.get('/register', (req, res) => {
    res.send(`
    <form action="/register" method="POST">
    <label for="username">Username:</label>
    <input type="text" name="username">

    <label for="password">Password:</label>
    <input type="password" name="password">

    <input type="submit" value="Register">
</form>
`);
});

app.post('/register', async (req, res) => {
    const hash = await bcrpyt.hash(req.body.password, 12);
    console.log(hash);
    db[req.body.username] = hash; //connect given username with given hash and save into DB (obj)

    res.redirect('/login');

});
app.post('/login', async (req, res) => {
    res.cookie('user', req.body.username);

    // check if hash  against given username exsists in db?
    const hash = db[req.body.username];
    console.log(hash);

    if (!hash) {
        return res.status(401).end();
    }

    // check if pw is valid?
    const isValid = await bcrpyt.compare(req.body.password, hash);
    console.log(isValid);

    if (!isValid) {
        return res.status(401).send('Unauthorized!');
    }

    // After authentication, let's give our user a certificate or TOKEN
    const payload = {
        username: req.body.username
    };

    const token = jsonwebtoken.sign(payload, secret, { expiresIn: '2h' });
    console.log(token);

    res.cookie('authJWT', token);

    res.send('Logged in successfully');

});

app.get('/logout', (req, res) => {
    res.clearCookie('user');
    res.end();
});

app.listen(5010, () => console.log(`Server is listening on http:;//localhost:5010...`));