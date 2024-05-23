const router = require('express').Router();
const movieService = require('../services/movieService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', (req, res) => {
    // parse form via configExpress file
    const newMovie = req.body;

    // utilize service function to store movie
    movieService.create(newMovie);

    res.redirect('/');

});

module.exports = router;