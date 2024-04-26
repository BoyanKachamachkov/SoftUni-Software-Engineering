import './App.css';
import MovieList from './components/MovieList';
import BookList from './components/BookList';
import movies from './assets/movies';
import books from './assets/books';

function App() {

    return (
        <div>
            <h1>
                My first DYNAMIC react app!
            </h1>

            {/* Подаваме масива от филми на movielist */}
            <MovieList headingText="Movie List" movies={movies} />
            <BookList bookHeading="Book List" books={books} />
        </div>


    );
}

export default App;
