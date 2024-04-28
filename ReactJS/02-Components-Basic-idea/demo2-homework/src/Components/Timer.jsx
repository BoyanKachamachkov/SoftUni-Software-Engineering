import { useState } from "react";

export default function Timer(props) {

    const [time, setTime] = useState(0);

    // do not use, just example purposes before useEffect Hook introduced!
    setTimeout(() => {
        setTime(time + 1);
    }, 1000);

    return (
        <>
            <h2>Timer Exercise with useState Hook</h2>
            <h3>[{time}] Seconds have passed!</h3>
        </>
    );
}