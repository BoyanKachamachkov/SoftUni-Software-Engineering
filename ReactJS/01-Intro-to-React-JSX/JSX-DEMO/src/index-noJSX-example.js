// 2. we have global access to react and reactDOM from the index


// 3. get root html el
const rootHtmlElement = document.getElementById('root');


// initialize root react
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// create basic react element

const headingOne = React.createElement('h1', null, 'heading 1');
const headingTwo = React.createElement('h2', {}, 'heading 2');


const HeaderElement = React.createElement('header', {},
    headingOne,
    headingTwo
);


rootReactElement.render(HeaderElement)


