export default function Movie(props) {

    return (
        <article>
            {/* пропса на всеки филм е само един отделен обект от масива*/}
            {/* датата се казва така, само защото така сме я кръстили в муви лист, когато викаме този компонент, може да е всичко */}
            <h3>{props.data.title}</h3>
            <p>Year: {props.data.year}</p>
            <p>Cast: {props.data.actors} </p>
        </article>
    );

}