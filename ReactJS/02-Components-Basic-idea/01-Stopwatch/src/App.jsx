import { useEffect, useState } from "react";
import './App.css';

function App() {
	const [time, setTime] = useState(0);
	const [running, setRunning] = useState(false);

	useEffect(() => {
		let interval;

		if (running) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else if (!running) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [running]);

	return (
		<section className="stopwatch">

			<div className="wrapper">
				<h1>Stopwatch</h1>
				<div className="time">
					<span>{('0' + Math.floor(time / 60000)).slice(-2)} : </span>
					<span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)} : </span>
					<span>{('0' + Math.floor((time / 10) % 100)).slice(-2)}</span>
				</div>

				<div className="controls">
					{(running ? (<button onClick={() => setRunning(false)}>Stop</button>) : (<button onClick={() => setRunning(true)}>Start</button>))}


					<button onClick={() => setTime(0)}>Reset</button>
				</div>
			</div>
		</section>
	);
}

export default App;