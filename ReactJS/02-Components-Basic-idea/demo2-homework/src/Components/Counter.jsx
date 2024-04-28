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

    // if (count < 0) {
    //     warning = <p>Invalid Count!</p>;
    // }


    let message = null;

    switch (count) {
        case 1:
            message = 'First blood!';
            break;
        case 2:
            message = 'Double kill!';
            break;
        case 3:
            message = 'Triple kill!';
            break;
        case 4:
            message = 'Multi kill!';
            break;
        case 5:
            message = 'Unstopppable!';
            break;

        default:
            message = 'M-m-m-m-monsteeer kill!';
            break;
    }


    return (
        <>
            <h3>Counter example:</h3>

            {/* {warning} */}

            {/* Ternary operator example */}
            {/* {count < 0
                ? <p>Invalid Count!</p>
                : <p>Valid Count!</p>

            } */}

            {/* BOOLEAN, if left part is true, show right */}
            {count == 0 && <p>Please start incrementing</p>}
            <h4>{message}</h4>
            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>+</button>
            <button onClick={clearCounter}>Clear</button>
            <button onClick={onDecrementClick}>-</button>

        </>
    );
}
