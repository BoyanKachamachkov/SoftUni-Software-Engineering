const express = require('express');

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hey there!');
});


app.listen(3000, () => console.log(`App is listening on port 3000...`));