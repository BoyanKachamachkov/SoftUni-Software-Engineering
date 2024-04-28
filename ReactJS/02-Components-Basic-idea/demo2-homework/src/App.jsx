import './App.css';
import movies from '../public/movies';
import MovieList from './assets/MovieList';

function App() {

    return (
        <>

            <h1>02-React-Components-homework!</h1>

            <MovieList
                movies={movies}
                headingText="Movie List"
            />
        </>
    );
}

export default App;
