import Button from "./components/Button";
import Display from "./components/Display";
import Title from "./components/Title";
import './App.css';
import { useState, useEffect } from "react";


function App() {
	const [time, setTime] = useState(0);
	const [running, setRunning] = useState(false);


	return (

		<section className="main">
			<Title />

			<Display time={time} />

			<Button text='Start' onClick={() => setRunning(true)} />
			<Button text='Stop' />
			<Button text='Reset' />

		</section>
	);
}

export default App;
