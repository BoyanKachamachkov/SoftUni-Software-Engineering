import Book from "./Book";


export default function BookList(props) {
    return (
        <div className="book-list">

            <h2>{props.bookHeading}</h2>
            <ul>
                <li> <Book bookData={props.books[0]} /></li>
                <li> <Book bookData={props.books[1]} /></li>
                <li> <Book bookData={props.books[2]} /></li>
            </ul>


        </div>
    );
}