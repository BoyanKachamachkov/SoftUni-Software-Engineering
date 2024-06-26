// 2. get root html element
var rootHtmlElement = document.getElementById('root');

// 3. initialize root react element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// 4. create basic react element
var headingReactElement = React.createElement('h1', null, 'Hello JSX from React');

var headingSectionElement = React.createElement('header', null, headingReactElement);

// 5. render
rootReactElement.render(headingSectionElement);