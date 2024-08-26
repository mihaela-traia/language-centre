import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./ClassesScreen.css";
import Layout from "../components/Layout/Layout";
import ClassesCard from "../components/Classes/ClassesCard";
import LineClasses from "../assets/Line 7 classes.png";
import Clouds from "../assets/clouds classes.png";

export default function Classes() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <section className="classes-group">
        <div className="container">
          <div className="row">
            <h2 className="text-center josefin-sans-h2">Clase în formare</h2>

            <h3 className="text-center josefin-sans-h3">
              Cursuri pentru copii
            </h3>
            <ClassesCard ageGroup="kids" />

            <h3 className=" text-center josefin-sans-h3">
              Cursuri pentru adolescenți
            </h3>
            <ClassesCard ageGroup="teens" />

            <h3 className="text-center josefin-sans-h3">
              Cursuri pentru adulți
            </h3>
            <ClassesCard ageGroup="adults" />
          </div>
        </div>
        <div className="line-classes-page">
          <img src={LineClasses} alt="" />
        </div>
        <div className="clouds-classes">
          <img src={Clouds} alt="" />
        </div>
      </section>
    </Layout>
  );
}
