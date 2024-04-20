import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var rootDomElement = document.getElementById('root');

// Create REACT ROOT EL
var root = ReactDOM.createRoot(rootDomElement);

var reactHeading = React.createElement('h1', {}, 'Hello from JSX!');
var reactSecondHeading = React.createElement('h2', {}, 'The best syntax ever!');
var Header = React.createElement('header', { className: 'site-header' }, reactHeading, reactSecondHeading);

var headerJSX = React.createElement(
    'header',
    null,
    React.createElement(
        'h1',
        null,
        'Hello from JSX!'
    ),
    React.createElement(
        'h2',
        null,
        'The best syntax ever!'
    ),
    React.createElement(
        'h3',
        null,
        'nice test!'
    ),
    React.createElement(
        'p',
        null,
        'It\'s kinda amazing how this works!'
    ),
    React.createElement(
        'p',
        null,
        'Testing from the other side?'
    )
);
root.render(headerJSX);