import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';


const rootDomElement = document.getElementById('root');

// Create REACT ROOT EL
const root = ReactDOM.createRoot(rootDomElement);

const reactHeading = React.createElement('h1', {}, 'Hello from JSX!');

root.render(reactHeading);