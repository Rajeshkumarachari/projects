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
            Quiz App
          </Link>
          <Link className="navlink" to="/quiz">
            Todo App
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Quiz />} />
          <Route path="/quiz" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
