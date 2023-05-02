import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Schedule from "./Components/Schedule";
import MenuBar from "./Components/MenuBar/index.jsx";

const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Schedule />
        <Footer />
    </div>
  );
};
export default App;
