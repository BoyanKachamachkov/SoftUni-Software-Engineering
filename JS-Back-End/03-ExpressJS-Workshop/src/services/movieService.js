const Movie = require('../models/Movie');
const Cast = require('../models/Cast');

exports.getAll = () => Movie.find(); //returns promise at service level will resolve at controller

exports.search = (title, genre, year) => {
    // TODO Filter result in mongoDB
    let query = {};

    if (title) {
        query.title = new RegExp(title, 'i');
    }

    if (genre) {
        query.genre = genre.toLowerCase();
    }

    if (year) {
        query.year = year;
    }

    return Movie.find(query);
};

exports.getOne = (movieId) => Movie.findById(movieId).populate('casts');

exports.create = (movieData) => Movie.create(movieData); //returns promise at service level

exports.attach = async (movieId, castId) => {
    const movie = await this.getOne(movieId);
    const cast = await Cast.findById(castId);

    // TODO: validate if castID exsists
    // TODO: validate if cast is already added
    movie.casts.push(cast);
    cast.movies.push(movie);

    await movie.save();
    await cast.save();

    return movie;

    // alternative way with 1 query
    // return Movie.findByIdAndUpdate(movieId, { $push: { casts: castId } });
};