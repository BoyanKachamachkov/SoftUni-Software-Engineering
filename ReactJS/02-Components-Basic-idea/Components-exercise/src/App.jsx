import './App.css';
import Bio from './components/Bio';
import Gallery from './components/Gallery';
import Profile from './components/Profile';
import ToDoList from './components/ToDoList';

function App() {

	return (
		<>
			<Gallery />
			<Profile />
			<ToDoList />
			<Bio />
		</>
	);
}

export default App;
