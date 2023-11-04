function movieStore(list) {
  let movies = [];

  list.forEach((line) => {
    if (line.includes("addMovie")) {
      let movieName = line.split("addMovie ")[1];
      movies.push(movieName);
    } else if (line.includes("directedBy ")) {
      let [name, director] = line.split(" directedBy ");
      let movie = movie.find((el) => el.name === name);

      if (movie) {
        movie.director = director;
      }
    } else if (line.includes("onData")) {
      let [name, date] = line.split(" onDate ");

      let movie = movie.find((el) => el.name === name);

      if (movie) {
        movie.date = date;
      }
    }
  });
  
}

movieStore([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
