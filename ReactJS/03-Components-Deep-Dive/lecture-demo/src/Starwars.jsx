import { useEffect, useState } from "react";

export default function Starwars() {

    const [characters, setCharacters] = useState([]);
    console.log(characters);

    useEffect(() => {
        fetch(`https://swapi.dev/api/people`)
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.results);
            })
            .catch((err) => console.log(err));
    }, []);



    return (
        <div>
            <h1>SW Characters</h1>
            <ul>
                {characters.map(c => <li key={c.url}>{c.name}</li>)}
            </ul>
        </div>
    );
}