import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Schedule from "./Components/Schedule";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Schedule />
        <Footer />
    </div>
  );
};
export default App;
