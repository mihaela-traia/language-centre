import React from "react";
import clock from "../../assets/clock.png";
import calendar from "../../assets/calendar.png";
import person from "../../assets/person.png";
import { Link } from "react-router-dom";
import classesData from "./ClassesInfo.json";
import "./ClassesCard.css";

function ClassesCard({ ageGroup }) {
  const filteredClasses = classesData.classes.filter(
    (classInfo) => classInfo.age === ageGroup
  );
  if (filteredClasses.length === 0) {
    return (
      <div className="classes-card col-lg-12 d-flex justify-content-center p-0 mb-5">
        <div className="card h-auto w-100 d-flex flex-column justify-content-between align-items-center py-5">
          <div className="card-body row col-lg-8 col-md-12 text-center">
            <p className="card-text mb-0 montserrat-sans-p py-5">
              <b>Momentan, nu există cursuri disponibile.</b>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="classes-card p-0 ms-1">
      {filteredClasses.map((classInfo, index) => (
        <div
          key={index}
          className="card h-auto d-flex flex-column justify-content-between align-items-center py-3"
        >
          <div className="card-body row col-12">
            <h3 className="card-title row col-12 josefin-sans-h3 ps-3">
              {classInfo.level}
            </h3>
            <div className="card-text row col-lg-8 col-md-12 col-sm-12 montserrat-sans-p">
              <div className="d-flex align-items-center mb-3">
                <span className="me-2">
                  <img src={clock} alt="" />
                </span>
                <p className="mb-0">
                  <b>Orar:</b> {classInfo.schedule}
                </p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <span className="me-2">
                  <img src={calendar} alt="" />
                </span>
                <p className="mb-0">
                  <b>Data începerii:</b> {classInfo.startingDate}
                </p>
              </div>
              <div className="d-flex align-items-center mb-3">
                <span className="me-2">
                  <img src={person} alt="" />
                </span>
                <p className="mb-0">
                  <b>Locuri disponibile:</b> {classInfo.openSpots}
                </p>
              </div>
            </div>
            <div className="button-reserve row col-lg-4 col-md-12 d-flex justify-content-end">
              <Link to="/test-online">
                <div className="btn btn-primary rounded-pill montserrat-sans-p">
                  Rezervă un loc
                </div>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ClassesCard;
