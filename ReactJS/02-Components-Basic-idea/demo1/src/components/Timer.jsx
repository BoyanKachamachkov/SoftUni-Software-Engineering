import { useState } from "react";

export default function Timer(props) {

    // time - read-only immutable, setTime will move the time
    // useState will hold closure to update the components
    const [time, setTime] = useState(props.time);

    // Don't use, only example, useEffect is for that purpose!
    setTimeout(() => {
        setTime(time + 1);
    }, 1000);
    return (

        <div>
            <h1>Timer</h1>

            <p>{time}</p>
        </div>
    );
}2