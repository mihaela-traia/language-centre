import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../pages/TestScreen.css";
import { resultInitalState } from "./Teens";
import Clock from "../../../assets/clock.png";

const QuizTeens = ({ questions }) => {
  const initialTime = 30 * 60;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answerIdx, setAnswerIdx] = useState(null);
  const [answer, setAnswer] = useState(null);
  const [result, setResult] = useState(resultInitalState);
  const [level, setLevel] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [elapsedTime, setElapsedTime] = useState(0);

  const { question, choices, correctAnswer } = questions[currentQuestion];

  const onAnswerClick = (answer, index) => {
    setAnswerIdx(index);
    setAnswer(answer === correctAnswer);
  };

  const onClickNext = () => {
    setAnswerIdx(null);
    const updatedScore = answer ? result.score + 1 : result.score;
    setResult((prev) => ({
      ...prev,
      score: updatedScore,
      correctAnswers: answer ? prev.correctAnswers + 1 : prev.correctAnswers,
    }));
    if (currentQuestion !== questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
      const calculatedLevel = resultGrade(updatedScore);
      setLevel(calculatedLevel);
      setElapsedTime(initialTime - timeLeft);
    }
  };

  const onTryAgain = () => {
    setResult(resultInitalState);
    setShowResult(false);
    setTimeLeft(initialTime);
    setElapsedTime(0);
  };

  const resultGrade = (score) => {
    if (score <= 5) {
      return "Vă rugăm să susțineți testul pentru Clasa II-IV";
    } else if (score <= 10) {
      return "Flyers 1";
    } else if (score <= 15) {
      return "Flyers 2";
    } else if (score <= 20) {
      return "Flyers 3";
    } else if (score <= 25) {
      return "Flyers 4";
    } else {
      return "Elementary 1";
    }
  };

  useEffect(() => {
    const countdownTimer = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      } else {
        setShowResult(true);
        setElapsedTime(initialTime);
        clearInterval(countdownTimer);
      }
    }, 1000);

    return () => clearInterval(countdownTimer);
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0 || currentQuestion === questions.length) {
      setShowResult(true);
      setElapsedTime(initialTime - timeLeft);
    }
  }, [timeLeft, currentQuestion, questions.length]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div className="quiz-container">
      {!showResult ? (
        <>
          <span className="active-question-no montserrat-sans-p">
            Întrebarea {currentQuestion + 1}
          </span>
          <span className="total-question montserrat-sans-p">
            /{questions.length}
          </span>
          <h2 className="text-center montserrat-sans-p">{question}</h2>
          <div className="timer d-flex align-content-center montserrat-sans-p me-2">
            <div>
              <img src={Clock} alt="" />
            </div>
            <div className="time ps-1 m-0">{formatTime(timeLeft)}</div>
          </div>
          <ul>
            {choices.map((choice, index) => (
              <li
                onClick={() => onAnswerClick(choice, index)}
                key={choice}
                className={answerIdx === index ? "selected-answer" : null}
              >
                {choice}
              </li>
            ))}
          </ul>
          <div className="footer d-flex justify-content-center">
            <button onClick={onClickNext} disabled={answerIdx === null}>
              {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
            </button>
          </div>
        </>
      ) : (
        <div className="result">
          <h2 className="josefin-sans-h2">Result</h2>
          <p className="montserrat-sans-p">
            Nivelul tău este <span>{level}</span>
          </p>
          <p className="montserrat-sans-p">
            Răspunsuri corecte: <span>{result.correctAnswers}</span>
          </p>
          <p className="montserrat-sans-p">
            Timpul de rezolvare: <span>{formatTime(elapsedTime)}</span> minute
          </p>
          <button onClick={onTryAgain}>Încearcă din nou</button>
        </div>
      )}
    </div>
  );
};

export default QuizTeens;
