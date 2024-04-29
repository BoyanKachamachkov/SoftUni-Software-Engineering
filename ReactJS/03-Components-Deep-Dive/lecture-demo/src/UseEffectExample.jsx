import { useState, useEffect } from "react";

export default function UseEffectExample(props) {


    const [count, setCount] = useState(0);

    // mount only execution
    useEffect(() => {
        console.log('I am mounted');
    }, []);

    useEffect(() => {
        // the code that we want to run
        console.log('Count is', count);

        // optional: return function
        return () => {
            console.log('I am being cleaned up!');
        };
    }, [count]); //dependency array


    return (
        <>

            <div>
                <h1>Count: {count}</h1>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
            </div>
        </>
    );
}