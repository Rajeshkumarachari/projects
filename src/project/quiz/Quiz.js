import React, { useEffect, useState } from "react";
import quiz from "./quiz.css";
import { VscDebugRestart } from "react-icons/vsc";
import questionData from "./question.json";

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timer, setTimer] = useState(10);
  const handleAnswerClick = (selectedOption) => {
    if (selectedOption === questionData[currentQuestion]?.correctOption) {
      setScore((prevScore) => prevScore + 1);
    }
    if (currentQuestion < questionData.length - 1) {
      setCurrentQuestion((prevQuestions) => prevQuestions + 1);
      setTimer(10);
    } else {
      setShowScore(true);
    }
  };
  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(0);
    setTimer(10);
  };
  useEffect(() => {
    let interval;
    if (timer > 0 && !showScore) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else {
      clearInterval(interval);
      setShowScore(true);
    }
    return () => clearInterval(interval);
  }, [timer, showScore]);
  return (
    <div className="body">
      <div className="quiz-app">
        {showScore ? (
          <div className="score">
            <h2 className="h2">
              Your Score:{score}/{questionData.length}
            </h2>
            <button className=" restart" onClick={handleRestartQuiz}>
              <VscDebugRestart /> Restart
            </button>
          </div>
        ) : (
          <div className="question">
            <h2 className="h2"> Question {currentQuestion + 1} </h2>
            <p className="p"> {questionData[currentQuestion]?.questions} </p>

            <div className="options">
              {questionData[currentQuestion]?.options.map((option, i) => (
                <button key={i} onClick={() => handleAnswerClick(option)}>
                  {option}{" "}
                </button>
              ))}
            </div>
            <div className="timer">
              {timer > 3 ? "Timer left :" : "Time Over :"}
              <span className={timer > 3 ? "span" : "spanLow"}>{timer}s</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
