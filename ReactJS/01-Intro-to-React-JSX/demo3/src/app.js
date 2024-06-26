// 2. get root html element
const rootHtmlElement = document.getElementById('root');

// 3. initialize root react element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// 4. create basic react element
const headingReactElement = React.createElement('h1', null, 'Hello JSX from React');

const headingSectionElement = React.createElement('header', null, headingReactElement);



// 5. render
rootReactElement.render(headingSectionElement);