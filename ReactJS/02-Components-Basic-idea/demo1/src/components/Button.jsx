import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    // function reference event handler
    const counterHandler = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Counter: {count}</p>
            {/* INLINE arrow function event handler */}
            {/* <button onClick={() => setCount(count + 1)}>
                Click me!
            </button> */}

            <button onClick={counterHandler}>Click me!</button>
        </div>
    );
};

export default Counter;