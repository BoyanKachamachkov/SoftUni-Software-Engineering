import { useState } from "react";

export default function Counter(props) {

    const [count, setCount] = useState(0);


    const onDecrementClick = () => {
        // setCount(count - 1); //no guarantee that this will be executed in proper order

        // best way (to ensure we use really last known value)
        setCount(oldValue => oldValue - 1);
    };

    function clearCounter(event) {
        console.log(event);
        setCount(0); //hard set value, this is correct if we dont care bout old value

    }


    // conditional rendering (not the best way)
    // if (count < 0){
    //     return(
    //         <h3>Invalid Count!</h3>
    //     )
    // }

    let warning = null;

    if (count < 0) {
        warning = <p>Invalid Count!</p>;
    }


    return (
        <>
            <h3>Counter example:</h3>

            {warning}
            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={clearCounter}>Clear</button>
            <button onClick={onDecrementClick}>-</button>

        </>
    );
}
