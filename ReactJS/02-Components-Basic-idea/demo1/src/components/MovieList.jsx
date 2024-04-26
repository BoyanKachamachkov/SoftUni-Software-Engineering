import Movie from "./Movie";

export default function MovieList(props) {

    return (
        <div className="movie-list">

            <h1>{props.headingText}</h1>

            <ul>
                {/* movieList  от своя страна подава данните на по 1 филм на всеки отделен Movie компонент */}
                {/* .мувис е понеже така сме го кръстили в апп-а, може да се казва всичко */}
                <li> <Movie data={props.movies[0]} /></li>
                <li> <Movie data={props.movies[1]} /></li>
                <li> <Movie data={props.movies[2]} /></li>
                <li> <Movie data={props.movies[3]} /></li>
            </ul>


        </div>

    );
}