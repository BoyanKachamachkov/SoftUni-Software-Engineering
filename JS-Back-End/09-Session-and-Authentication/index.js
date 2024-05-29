const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();


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

app.post('/login', (req, res) => {
    res.cookie('user', req.body.username);

    res.end();

});

app.get('/logout', (req, res) => {
    res.clearCookie('user')
    res.end()
});

app.listen(5010, () => console.log(`Server is listening on http:;//localhost:5010...`));