import { useState } from 'react';
import './App.css';


function App() {
	const [count, setCount] = useState(0);


	function reset() {
		setCount(0);
	}

	return (
		<>
			<h1>Counter app</h1>

			<span>Current count: {count}</span>

			<button onClick={() => setCount(count => count + 1)}>Increment</button>
			<button onClick={() => setCount(count => count - 1)}>Decrement</button>
			<button onClick={reset}>Reset</button>

		</>
	);
}

export default App;
