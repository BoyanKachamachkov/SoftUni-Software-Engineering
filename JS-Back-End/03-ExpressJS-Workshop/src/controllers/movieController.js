const router = require('express').Router();
const movieService = require('../services/movieService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {

    // parse form via configExpress file
    const newMovie = req.body;
    movieService.create(newMovie);

    res.send('Movie should be created!');
});

module.exports = router;