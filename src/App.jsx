import React, { useState } from "react";
import { questions } from "./data";

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAnswer = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setTimeout(() => {
      setSelectedOption(null);
      if (currentQuestion + 1 < questions.length) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResults(true);
      }
    }, 1000);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResults(false);
    setSelectedOption(null);
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center justify-center p-6 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Quiz Application</h1>
      {showResults ? (
        <div className="text-center bg-white p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Quiz Completed!</h2>
          <p className="mb-6">Your score: {score} / {questions.length}</p>
          <button onClick={restartQuiz} className="border text-gray-800 px-4 py-2 rounded hover:bg-gray-100">Restart</button>
        </div>
      ) : (
        <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-md">
          <h2 className="text-xl font-semibold mb-4">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p className="mb-6">{questions[currentQuestion].question}</p>
          <div className="flex flex-col gap-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={`px-4 py-2 rounded text-left transition-all duration-300 ${
                  selectedOption === option
                    ? option === questions[currentQuestion].answer
                      ? "bg-green-500"
                      : "bg-red-500"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-100 cursor-pointer"
                }`}
                disabled={!!selectedOption}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;