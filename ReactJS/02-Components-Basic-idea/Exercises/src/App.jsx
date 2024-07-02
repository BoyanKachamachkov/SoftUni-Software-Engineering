import './App.css';

function App() {


// search example, fixing HTML 
	return (
		<form>
			<label htmlFor="search-input">Search:</label>
			<input type="text" id="search-input" />

			<button aria-label='Submit' className='submit-btn'>
				<img
					src="https://sandpack-bundler.vercel.app/img/arrow-right.svg"
					alt=""
				/>
			</button>
		</form>
	);
}

export default App;
