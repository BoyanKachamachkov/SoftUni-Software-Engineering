import './App.css';
import movies from '../public/movies';
import MovieList from './Components/MovieList';
import MovieList2 from './Components/MovieList2';
import Timer from './Components/Timer';

function App() {

    return (
        <>

            <h1>02-React-Components-homework!</h1>

            <Timer />

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
