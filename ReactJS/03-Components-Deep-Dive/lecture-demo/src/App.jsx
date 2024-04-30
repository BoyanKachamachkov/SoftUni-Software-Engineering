import { useState, useEffect } from 'react';
import './App.css';
import React from 'react';


function App() {

    const [nums, setNumbers] = useState([1, 2, 3, 4, 5]);
    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log('Mount component');
    }, []);

    useEffect(() => {
        console.log('Update component - numbers');
    }, [nums]);


    const onClick = () => {
        setNumbers(oldState =>
            oldState.slice(1, oldState.length - 1)

        );
    };


    return (

        <div>
            <ul>
                {nums.map((num, idx) => <li data-key={idx} key={idx}>{num * 2}</li>)}
            </ul>

            <h3>Count: {count}</h3>

            <button onClick={onClick}>Remove</button>
            <button onClick={() => setCount(c => c + 1)}>+</button>

        </div>

    );
}

export default App;
