const Movie = require('../models/Movie');

exports.getAll = () => Movie.find(); //returns promise at service level will resolve at controller

exports.search = async (title, genre, year) => {
    // TODO Filter result in mongoDB
    let result = await Movie.find().lean();

    if (title) {
        result = result.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()));
    }

    if (genre) {
        result = result.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase());
    }

    if (year) {
        result = result.filter(movie => movie.year === year);
    }

    return result;
};

exports.getOne = (movieId) => Movie.findById(movieId);

exports.create = (movieData) => Movie.create(movieData); //returns promise at service level