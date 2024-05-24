const movies = [{
    _id: 1,
    title: 'Jungle Cruise',
    genre: 'Adventure',
    director: 'Spilberg',
    year: '2003',
    imageUrl: '/img/jungle-cruise.jpeg',
    rating: '5',
    description: "The story begins when 11-year-old orphan Harry discovers that his parents were wizards and he starts his education in magic at Hogwart's School of Witchcraft and Wizardry. There he makes two close friends, Ron and Hermione, who share his adventures.\r\n"
}]; // нямаме персистенция на данните

exports.getAll = () => {
    return movies.slice(); // return shallow copy, good practice; new reference
    // return [...movies]

    // return Array.from(movies)
};

exports.search = (title, genre, year) => {
    let result = movies.slice();

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

exports.getOne = (movieId) => {
    // movieId comes as string from params, need to use ==, to make coercion
    const movie = movies.find(movie => movie._id == movieId);



    return movie;

};

exports.create = (movieData) => {
    movieData._id = movies[movies.length - 1]._id + 1;
    movies.push(movieData);
};