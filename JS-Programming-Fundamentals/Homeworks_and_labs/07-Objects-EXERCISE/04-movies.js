function movieStore(arr) {
    let movies = [];

    for (let line of arr) {
        if (line.includes('addMovie')) {
            let movieName = line.split('addMovie ')[1];
            let movieObj = { name: movieName }; //store in obj
            movies.push(movieObj); //push info to movies arr
        } else if (line.includes('directedBy')) {
            let [movieName, director] = line.split(' directedBy ');

            // check the arr for exsisting obj key movie.name
            let movie = movies.find((movie) => movie.name === movieName);

            // if we have truthy value
            if (movie) {
                movie.director = director;
            }
        } else if (line.includes(' onDate ')) {
            let [movieName, date] = line.split(' onDate ');

            let movie = movies.find((movie) => movie.name === movieName);
            if (movie) {
                movie.date = date;
            }
        }
    }

    for (let movie of movies) {
        if (movie.name && movie.director && movie.date) {
            console.log(JSON.stringify(movie));
        }
    }
}

movieStore([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen',
]);
