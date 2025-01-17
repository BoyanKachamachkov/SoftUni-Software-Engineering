import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import TodoList from './components/TodoList';

function App() {

	return (
		<>
			<Header />
			<main className="main">

				<TodoList />
			</main>

			<Footer />
		</>
	);
}

export default App;
