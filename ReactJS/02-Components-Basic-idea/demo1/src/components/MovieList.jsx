import Movie from "./Movie";
import Heading from "./Heading";

export default function MovieList(props) {

    return (
        <div className="movie-list">

            {/* .children use here, стойността между фрагмента отива като дете в хединга */}
            {/* това, което подадем между отварящия и затварящия таг автоматично отива в пропс.чилдрен */}
            <Heading>{props.headingText} </Heading>

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