const movies = [{
    title: 'Harry Potter',
    genre: 'Fantasy',
    director: 'David Yates',
    date: '2003',
    imageUrl: 'HP',
    rating: '5/5',
    description: "The story begins when 11-year-old orphan Harry discovers that his parents were wizards and he starts his education in magic at Hogwart's School of Witchcraft and Wizardry. There he makes two close friends, Ron and Hermione, who share his adventures.\r\n"
}]; // нямаме персистенция на данните

exports.getAll = () => {
    return movies.slice(); // return shallow copy, good practice; new reference
    // return [...movies]
    
    // return Array.from(movies)
};

exports.create = (movieData) => {
    movies.push(movieData);
    console.log(movieData);
};