import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Info from "./components/Info";
import OurClients from "./components/OurClients";
import OurTeam from "./components/OurTeam";
import Services from "./components/Services";
import Why from "./components/Why";

function App() {

    return (
        <>
            <Header />
            <Services />
            <About />
            <Why />
            <OurTeam />
            <OurClients />
            <Info />
            <Footer />
        </>
    );
}

export default App;
