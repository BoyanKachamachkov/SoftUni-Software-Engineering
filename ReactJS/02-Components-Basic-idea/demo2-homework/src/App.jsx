import './App.css';
import movies from '../public/movies';
import MovieList from './assets/MovieList';
import MovieList2 from './assets/MovieList2';

function App() {

    return (
        <>

            <h1>02-React-Components-homework!</h1>

            <MovieList
                movies={movies}
                headingText="Movie List - 1st Edition"
            />

            <MovieList2
                movies={movies}
                headingText="Movie List - 2nd Edition"
            />
        </>
    );
}

export default App;
