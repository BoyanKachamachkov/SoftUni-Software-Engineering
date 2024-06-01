const express = require('express');
const cookieParser = require('cookie-parser');
const bcrpyt = require('bcrypt');

const app = express();

const db = {};


app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res) => {

    const user = req.cookies['user'];

    if (user) {
        res.send(`Hello ${user}`);
    } else {
        res.send('Please login!');
    }
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

    db[req.body.username] = hash; //connect given username with given hash and save into DB (obj)

    res.redirect('/login');

});
app.post('/login', async (req, res) => {
    res.cookie('user', req.body.username);

    // check if hash  against given username exsists in db?
    const hash = db[req.body.username];
    console.log(hash)

    if (!hash) {
        return res.status(401).end();
    }

    // check if pw is valid?
    const isValid = await bcrpyt.compare(req.body.password, hash);
    console.log(isValid)

    if (!isValid) {
        return res.status(401).send('Unauthorized!');
    }

    res.send('Logged in successfully');

});

app.get('/logout', (req, res) => {
    res.clearCookie('user');
    res.end();
});

app.listen(5010, () => console.log(`Server is listening on http:;//localhost:5010...`));