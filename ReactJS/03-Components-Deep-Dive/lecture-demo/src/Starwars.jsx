import { useState } from "react";
import { useEffect } from "react";

export default function Starwars(props) {

    const [characters, setCharacters] = useState({});

    useEffect(() => {
        fetch(`https://anapioficeandfire.com/api/characters`)
            .then((response) => response.json())
            .then((data) => {
                setCharacters(data.result);
                console.log(setCharacters);
            })
            .catch((err) => console.log(err));

    }, []);

    return (

        <div>
            <h1>SW Characters</h1>

            <ul>
                {/* {characters.map(character => <li key={character.id}>{character.name}</li>)} */}
            </ul>
        </div>


    );

}