import Footer from './components/Footer';
import Header from './components/Header';
import UserContainer from './components/UserContainer';
import './styles.css';

function App() {

    return (
        <>
            <Header />
            <main className="main">

                <UserContainer />

            </main>
            <Footer />
        </>
    );
}

export default App;
