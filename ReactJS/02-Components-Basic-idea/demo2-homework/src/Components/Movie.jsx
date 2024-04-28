const Movie = (props) => {

    return (

        <>
            <ul>
                <li>Title: {props.data.title}
                    <p>Author: {props.data.author}</p>
                </li>
            </ul>

        </>
    );
};


export default Movie;