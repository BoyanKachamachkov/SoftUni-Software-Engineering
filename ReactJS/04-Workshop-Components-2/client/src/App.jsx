import Button from "./components/button/Button";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Pagination from "./components/pagination/Pagination";
import SectionList from "./components/section-list/SectionList";

function App() {

    return (
        <>
            <Header />

            <main className="main">

                <SectionList />


            </main>

            <Footer />
        </>
    );
}

export default App;
