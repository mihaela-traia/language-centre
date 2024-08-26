import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../pages/TestScreen.css";
import { Link } from "react-router-dom";
import CloudOne from "../../../assets/Clouds-test-1.png";
import CloudTwo from "../../../assets/Clouds-test-2.png";
import Sun from "../../../assets/sun.png";
import Instructions from "../../Instructions";
import { jsQuizz } from "./Teens";
import QuizTeens from "./QuizTeens";

function TestKids() {
  const [showTest, setShowTest] = useState(false);

  const handleStartTest = () => {
    setShowTest(true);
  };

  return (
    <section className="testing">
      <div className="arrow-back d-flex row align-items-center">
        <Link to="/test-online" className="d-flex align-items-center">
          <svg
            className="col"
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 40 40"
          >
            <path
              fill="#012169"
              stroke="#012169"
              strokeWidth="0.5"
              d="M14.778 20.265l12.68-12.683h0c.291-.292.44-.65.44-1.058 0-.41-.149-.767-.44-1.058v-.001a1.48 1.48 0 00-1.06-.446h0a1.44 1.44 0 00-1.066.436h0l-12.734 12.74s0 0 0 0a2.77 2.77 0 00-.647.989h0c-.133.358-.201.718-.201 1.081s.068.724.2 1.082l.001.002c.138.365.355.695.647.988h0l12.735 12.727h0c.293.291.65.441 1.059.441.408 0 .765-.15 1.058-.44.292-.292.444-.649.447-1.058a1.439 1.439 0 00-.437-1.058s0 0 0 0L14.778 20.265z"
            ></path>
          </svg>
          <p className="col josefin-sans-h3 m-0">Înapoi</p>
        </Link>
      </div>
      <div className="container rounded-5">
        {!showTest ? (
          <>
            <h2 className="col-12 josefin-sans-h2 text-center">Clasa VI-VII</h2>
            <Instructions />
            <div className="container-button col-12 d-flex justify-content-center pb-5">
              <button
                className="button-start btn btn-primary rounded-pill bg--text-secondary montserrat-sans-p"
                onClick={handleStartTest}
              >
                Începe testul
              </button>
            </div>
          </>
        ) : (
          <div className="test-content row col col-12 d-flex justify-content-center">
            <QuizTeens questions={jsQuizz.questions} />
          </div>
        )}
      </div>
      <div className="cloud-one">
        <img src={CloudOne} alt="Cloud One" />
      </div>
      <div className="cloud-two">
        <img src={CloudTwo} alt="Cloud Two" />
      </div>
      <div className="sun">
        <img src={Sun} alt="Sun" />
      </div>
    </section>
  );
}

export default TestKids;
