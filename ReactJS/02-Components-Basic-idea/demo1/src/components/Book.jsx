

export default function Book(props) {
    return (
        <article>
            <h3>{props.bookData.title}</h3>
            <p>Written by: {props.bookData.writer}</p>
        </article>
    );
}