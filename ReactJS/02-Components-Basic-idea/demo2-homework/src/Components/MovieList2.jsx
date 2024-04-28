import Movie from "./Movie";

const MovieList2 = (props) => {

    return (
        <>
            <h2>{props.headingText}</h2>
            <Movie data={props.movies[0]} />
            <Movie data={props.movies[1]} />
            <Movie data={props.movies[2]} />
        </>
    );
};

export default MovieList2;