import './App.css';
import MovieList from './components/MovieList';
import movies from './assets/movies';

function App() {

    return (
        <div>
            <h1>
                My first DYNAMIC react app!
            </h1>

            <MovieList headingText="Movie List" movies={movies}/>
        </div>


    );
}

export default App;
