import './App.css';
import movies from '../public/movies';
import MovieList from './Components/MovieList';
import MovieList2 from './Components/MovieList2';
import Timer from './Components/Timer';
import Counter from './Components/Counter';

function App() {

    return (
        <>

            <h1>02-React-Components-homework!</h1>

            <Counter />
            {/* <Timer startTime={0} />
            <Timer startTime={5} />
            <Timer startTime={6} />
            <Timer startTime={7} />

            <MovieList
                movies={movies}
                headingText="Movie List - 1st Edition"
            />

            <MovieList2
                movies={movies}
                headingText="Movie List - 2nd Edition"
            /> */}
        </>
    );
}

export default App;
