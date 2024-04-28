import './App.css';
import { useState } from 'react';

function App() {

    const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

    const onClick = () => {
        setNumbers(oldState => oldState.slice(1));
    };


    // initially key of last num is 4, at the end its 0
    // meaning = using the INDEX works half the times, but its not good because it makes REACT re-render all LI elements, (it changes the keys at each button click)

    return (
        <div>
            <ul>
                {numbers.map((number, index) =>
                    <li data-key={index} key={index}
                    >{number * 2}</li>)}
            </ul>

            <button onClick={onClick}>Remove item on top</button>
        </div>
    );
}

export default App;
