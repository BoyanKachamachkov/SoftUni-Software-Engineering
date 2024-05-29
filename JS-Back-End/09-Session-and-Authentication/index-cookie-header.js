const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {

    const loginInfo = req.header('Cookie')
    console.log(loginInfo);

    if (loginInfo) {
        res.send(`Hello ${loginInfo.split('=').at(1)}`);
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

app.post('/login', (req, res) => {
    console.log(req.body);

    res.header('Set-Cookie', `loginInfo=${req.body.username}`);

    res.end();
});

app.listen(5010, () => console.log(`Server is listening on http:;//localhost:5010...`));