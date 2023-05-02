import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home/index.jsx";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import News from "./Components/News/index.jsx";

const App = () => {
  return (
    <div>
      <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />

        </Routes>
        <Footer/>
    </div>
  );
};
export default App;
