const Movie = require('../models/Movie');
const Cast = require('../models/Cast');

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