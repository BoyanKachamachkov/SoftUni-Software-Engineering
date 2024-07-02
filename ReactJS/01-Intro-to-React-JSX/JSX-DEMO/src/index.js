// 2. we have global access to react and reactDOM from the index


// 3. get root html el
const rootHtmlElement = document.getElementById('root');


// initialize root react
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// creata basic react elemetn
const headingReacElement = React.createElement('h1', null, 'Hello JSX from React');


rootReactElement.render(headingReacElement)


 