import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Quiz from "./project/quiz/Quiz";
import { SiFramework } from "react-icons/si";
import Todos from "./project/todo/Todos";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar">
          <SiFramework className="navLogo" />
          <Link className="navlink" to="/">
            Todo App
          </Link>
          <Link className="navlink" to="/quiz">
            Quiz App
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Todos />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
