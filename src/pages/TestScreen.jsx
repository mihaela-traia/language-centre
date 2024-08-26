import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./TestScreen.css";
import { Link } from "react-router-dom";
import CloudOne from "../assets/Clouds-test-1.png";
import CloudTwo from "../assets/Clouds-test-2.png";
import Sun from "../assets/sun.png";

function Test() {
  return (
    <section className="testing">
      <div className="arrow-back d-flex row align-items-center">
        <Link to="/" className="d-flex align-items-center">
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
      <div className="container rounded-5 py-5">
        <h2 className="col-12 josefin-sans-h2 text-center">
          Testați-vă cunoștințele de limba engleză
        </h2>
        <p className="info col-12 montserrat-sans-p text-center">
          Verifică-ți GRATUIT nivelul de limba ENGLEZĂ!
        </p>
        <p className="info col-12 montserrat-sans-p text-center">
          Alege versiunea testului potrivită pentru clasa ta și vei avea 30 de
          minute pentru a-l finaliza. La final, completează-ți datele personale
          pentru a primi rezultatul testului.
        </p>
        <ul className="category row d-flex text-center josefin-sans-h1">
          <li className="col-lg-4 col-md-12 pb-5">
            <Link to="/test-online/v1">
              <div className="border-effect">
                <div className="rounded-circle align-items-center">
                  <span>Clasa</span>
                  <span> II-V</span>
                </div>
              </div>
            </Link>
          </li>
          <li className="col-lg-4 col-md-12 pb-5">
            <Link to="/test-online/v2">
              <div className="border-effect">
                <div className="rounded-circle">
                  <span>Clasa</span>
                  <span> VI-VII</span>
                </div>
              </div>
            </Link>
          </li>
          <li className="col-lg-4 col-md-12 pb-5">
            <Link to="/test-online/v3">
              <div className="border-effect">
                <div className="rounded-circle">
                  <span>Clasa VIII-XII </span>
                  <span> Adulți</span>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
      <div className="cloud-one">
        <img src={CloudOne} alt="" />
      </div>
      <div className="cloud-two">
        <img src={CloudTwo} alt="" />
      </div>
      <div className="sun">
        <img src={Sun} alt="" />
      </div>
    </section>
  );
}

export default Test;
