// React is JS library for building UI
// focused on reusable components
// developed by Facebook
// JSX is JS superset
// has all JS Features and more!

// unique mixing of HTML & JS


// compiles to plain JS example below
<div className="red">Children Text</div>;

React.createEelement('div',
    { className: 'red' },
    'Children Text'
);

// Declarative
// design simple views for each state in your app
// easier to debug

// Component-based
// Encapsulated components that manage their own state
// !KEEP STATE OUT OF THE DOM!

// isomorphic
// JS that runs on both client & server
// Better User experience (SSR = server side rendering) (CSR = client side rendering)

// Native* support for rich mobile UI in Android, IOS

// Fast performance
// USE all ES6 Features --> Promises, Classes and Modules

// ---------------------------------
// RULES!
// standard elements use lowercase names
// div, span, form, input, etc...

// COMPONENTS always use PascalCase
// e.g. ScoreBoard, MyCustomComponent

// There must be a ROOT element!