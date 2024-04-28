export default function MovieList(props) {
    return (
        <>

            <h2>{props.headingText}</h2>

            <ul>
                <li>Title: {props.movies[0].title}
                    <p>Author: {props.movies[0].author}</p>
                </li>
                <li>Title: {props.movies[1].title}
                    <p>Author: {props.movies[1].author}</p>
                </li>
                <li>Title: {props.movies[2].title}
                    <p>Author: {props.movies[2].author}</p>
                </li>
            </ul>


        </>
    );
}