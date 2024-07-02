// 2. we have global access to react and reactDOM from the index


// 3. get root html el
const rootHtmlElement = document.getElementById('root');


// initialize root react
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// create basic react element

const headingTwo = <h2>This is JSX heading 2</h2>;

// JSX example now ! :) 
const HeaderElement = (
    <header>
        <h1>This is heading 1 JSX</h1>
        <h2>This is heading 2 JSX</h2>
        <p>Random paragraph for test</p>
        <p>one more random P</p>
    </header>
);


rootReactElement.render(HeaderElement)


