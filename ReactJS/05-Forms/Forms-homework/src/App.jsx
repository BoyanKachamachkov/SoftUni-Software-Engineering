import FormInput from './components/FormInput';
import './app.css'

function App() {

  return (
    <div className='app'>

      <form>
        <FormInput placeholder='Enter your username' />
        <FormInput placeholder='Enter your email' />
        <FormInput placeholder='Enter your Full Name' />
        <FormInput />
      </form>
    </div>
  );
}

export default App;
