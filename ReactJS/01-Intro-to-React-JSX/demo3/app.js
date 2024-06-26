// 2. get root html element
var rootHtmlElement = document.getElementById('root');

// 3. initialize root react element
var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

var headingReactionSectionElement = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        'Hello from JSX'
    ),
    React.createElement(
        'h2',
        null,
        'hi jsx'
    )
);

// 5. render
rootReactElement.render(headingReactionSectionElement);