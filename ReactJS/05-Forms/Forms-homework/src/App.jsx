import FormInput from './components/FormInput';
import './app.css';
import { useState, useRef } from 'react';

function App() {
  // const [username, setUsername] = useState('');
  const usernameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput name="username" placeholder="Enter your username" />
        <FormInput name="email" placeholder="Enter your email" />
        <FormInput name="fullName" placeholder="Enter your Full Name" />
        <FormInput name="sth" placeholder="Something else" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
