const router = require('express').Router();



app.get('/', (req, res) => {
    res.send('hello');
});

module.exports = router;