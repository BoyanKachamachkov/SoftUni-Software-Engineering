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

router.get('/movies/:movieId', (req, res) => {
    const movieId = req.params.movieId;
    const movie = movieService.getOne(movieId);

    // this is not good practice, use handlebars helpers
    movie.rating = new Array(Number(movie.rating)).fill(true);
    res.render('details', { movie });
});

module.exports = router;