import { useState } from 'react';
import './App.css';
import React from 'react';


function App() {

    const [nums, setNumbers] = useState([1, 2, 3, 4, 5]);

    const onClick = () => {
        setNumbers(oldState => oldState.slice(1));
    };


    return (

        <div>
            <ul>
                {nums.map((num, idx) => <li data-key={idx} key={idx}>{num * 2}</li>)}
            </ul>

            <button onClick={onClick}>Remove</button>

        </div>

    );
}

export default App;
