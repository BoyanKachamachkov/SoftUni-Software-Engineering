// 2. we have global access to react and reactDOM from the index


// 3. get root html el
var rootHtmlElement = document.getElementById('root');

// initialize root react
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// create basic react element

var headingOne = React.createElement('h1', null, 'heading 1');
var headingTwo = React.createElement('h2', {}, 'heading 2');

var HeaderElement = React.createElement('header', {}, headingOne, headingTwo);

rootReactElement.render(HeaderElement);