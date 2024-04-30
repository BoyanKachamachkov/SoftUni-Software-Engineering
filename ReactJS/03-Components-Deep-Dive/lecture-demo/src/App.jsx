import './App.css';


function App() {
    let numbers = [1, 2, 3, 4, 5];
    let doubled = numbers.map(n => n * 2);

    console.log(doubled);

    return (

        <ul>
            {doubled}
        </ul>
    );
}

export default App;
