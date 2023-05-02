import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home/index.jsx";
import Footer from "./Components/Footer";
import { Route, Routes } from "react-router-dom";
import News from "./Components/News/index.jsx";
import Ticket from "./Components/Ticket/index.jsx";
import Team from "./Components/Team/index.jsx";
import Membership from "./Components/Membership/index.jsx";
import OurClub from "./Components/OurClub/index.jsx";

const App = () => {
  return (
    <div>
      <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/news" element={<News />} />
            <Route path="/team" element={<Team />} />
            <Route path="/news" element={<Ticket />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/ourclub" element={<OurClub />} />

        </Routes>
        <Footer/>
    </div>
  );
};
export default App;
