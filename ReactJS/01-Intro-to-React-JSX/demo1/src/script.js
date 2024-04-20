import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';


const rootDomElement = document.getElementById('root');

// Create REACT ROOT EL
const root = ReactDOM.createRoot(rootDomElement);

const reactHeading = React.createElement('h1', {}, 'Hello from JSX!');
const reactSecondHeading = React.createElement('h2', {}, 'The best syntax ever!');
const Header = React.createElement(
    'header',
    { className: 'site-header' },
    reactHeading,
    reactSecondHeading);


const headerJSX = (
    <header>
        <h1>Hello from JSX!</h1>
        <h2>The best syntax ever!</h2>
        <h3>nice test!</h3>
        <p>It's kinda amazing how this works!</p>
    </header>
);
root.render(headerJSX);