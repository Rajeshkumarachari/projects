import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calender from "./project/Calender";
import { Link } from "react-router-dom";
import Quiz from "./project/Quiz";
import { SiFramework } from "react-icons/si";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar">
          <SiFramework className="navLogo" />
          <Link className="navlink" to="/">
            Calender
          </Link>
          <Link className="navlink" to="/quiz">
            Quiz App
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Calender />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
