import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Calender from "./project/calender/Calender";
import { Link } from "react-router-dom";
import Quiz from "./project/quiz/Quiz";
import { SiFramework } from "react-icons/si";
import Accordion from "./project/accordion/Accordion";

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
          <Link className="navlink" to="/accordian">
            Accordion
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Calender />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/accordian" element={<Accordion />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
