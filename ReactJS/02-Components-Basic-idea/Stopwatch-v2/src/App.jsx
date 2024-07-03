import Button from "./components/Button";
import Display from "./components/Display";
import Title from "./components/Title";
import './App.css';


function App() {

	return (

		<section className="main">
			<Title />

			<Display />

			<Button text='Start' />
			<Button text='Stop' />
			<Button text='Reset' />

		</section>
	);
}

export default App;
