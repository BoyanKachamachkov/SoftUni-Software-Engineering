// 2. we have global access to react and reactDOM from the index


// 3. get root html el
var rootHtmlElement = document.getElementById('root');

// initialize root react
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// create basic react element

var headingTwo = React.createElement(
    'h2',
    null,
    'This is JSX heading 2'
);

// JSX example now ! :) 
var HeaderElement = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        'This is heading 1 JSX'
    ),
    React.createElement(
        'h2',
        null,
        'This is heading 2 JSX'
    ),
    React.createElement(
        'p',
        null,
        'Random paragraph for test'
    ),
    React.createElement(
        'p',
        null,
        'one more random P'
    ),
    React.createElement(
        'p',
        null,
        'random'
    )
);

rootReactElement.render(HeaderElement);