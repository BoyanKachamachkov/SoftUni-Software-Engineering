// 2. get root html element
const rootHtmlElement = document.getElementById('root');

// 3. initialize root react element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);


const headingReactionSectionElement = (
    <header>
        <h1>Hello from JSX</h1>
        <h2>hi jsx</h2>
    </header>
);


// 5. render
rootReactElement.render(headingReactionSectionElement);