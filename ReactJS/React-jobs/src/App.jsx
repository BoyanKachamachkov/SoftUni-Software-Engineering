import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import HomeCards from './components/HomeCards';
import JobListings from "./components/JobListings";
import ViewAllJobs from "./components/ViewAllJobs";

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <HomeCards />
      <JobListings />
      <ViewAllJobs />
    </>

  );
};
export default App;