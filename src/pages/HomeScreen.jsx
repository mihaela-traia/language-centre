import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./HomeScreen.css";
import Layout from "../components/Layout/Layout";
import { Link } from "react-router-dom";
import CloudsHome from "../assets/clouds home.png";
import LineOneHome from "../assets/Line 1 home.png";
import GirlHome from "../assets/girl home.png";
import LineTwoHome from "../assets/Line 2 home.png";
import KidOne from "../assets/home doodle.png";
import KidTwo from "../assets/home doodle 2.png";
import Plane from "../assets/paper-plane.png";
import Diploma from "../assets/diploma.png";
import Mortar from "../assets/mortar.png";
import Checkbox from "../assets/checkbox.png";
import Exam from "../assets/exam.png";
import Schedule from "../assets/schedule.png";
import Book from "../assets/book.png";
import LineThreeAbout from "../assets/Line 3 about.png";
import KidThree from "../assets/doodle about.png";
import KidFour from "../assets/doodle about girl.png";
import LineFourClasses from "../assets/Line 4 courses.png";
import TeenClasses from "../assets/discussion.png";
import AdultClasses from "../assets/adults.png";
import KidsClasses from "../assets/kids.png";
import clock from "../assets/clock.png";
import person from "../assets/person.png";
import location from "../assets/location.png";
import LineFiveTest from "../assets/Line 6 test.png";
import CloudsTest from "../assets/clouds 2.png";
import CloudSun from "../assets/cloud and sun.png";
import Trees from "../assets/Trees.png";
import KidFive from "../assets/doodle test.png";
import KidSix from "../assets/doodle test 2.png";
import Adress from "../assets/Circle adress.png";
import Email from "../assets/Circle Mail.png";
import Phone from "../assets/Circle phone.png";
import Facebook from "../assets/facebook.png";
import Instagram from "../assets/instagram.png";
import TikTok from "../assets/tiktok.png";

function Home() {
  return (
    <Layout>
      <div className="main-layout">
        <div className="main">
          <section className="home" id="home">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col">
                  <div className="home-text col-xxl-10 col-xl-10 col-md-10 col-sm-12 pb-5">
                    <div className="slogan josefin-sans-h1">
                      Excelență academică
                    </div>
                    <p className="slogan-more col-10 montserrat-sans-p">
                      Ne dedicăm excelenței academice prin cursuri de engleză
                      pentru toate nivelurile, susținute de profesori experți.
                      Cu metode moderne și un mediu prietenos, vă ajutăm să vă
                      atingeți obiectivele lingvistice pentru muncă, studii sau
                      călătorii. Alăturați-vă nouă și excelați!
                    </p>
                    <a
                      className="buttom-more btn btn-primary btn-lg rounded-pill montserrat-sans-p"
                      href="#about"
                    >
                      Află mai multe
                    </a>
                  </div>
                  <div className="clouds">
                    <img src={CloudsHome} alt="" />
                  </div>
                  <div className="line-one">
                    <img src={LineOneHome} alt="" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="girl-home">
                    <img src={GirlHome} alt="Fată care arată semn OK" />
                  </div>
                </div>
                <div className="line-two">
                  <img src={LineTwoHome} alt="" />
                </div>
                <div className="kid-one">
                  <img src={KidOne} alt="" />
                </div>
                <div className="kid-two">
                  <img src={KidTwo} alt="" />
                </div>
              </div>
            </div>
          </section>

          <section className="about" id="about">
            <div className="container">
              <div className="row align-items-center">
                <div className="plane">
                  <img src={Plane} alt="" />
                </div>
                <h2 className="col-12 text-center mb-4 josefin-sans-h2">
                  De ce să alegi Cambridge Elite?
                </h2>
                <div className="panels row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4 mt-4 mb-3">
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={Diploma}
                        className="card-img-top"
                        alt="Diplomă"
                      />
                      <div className="card-body">
                        <p className="card-text montserrat-sans-p">
                          Cursurile Cambridge sunt recunoscute la nivel
                          internațional pentru calitatea și rigurozitatea lor.
                          Diploma Cambridge deschide uși către universități de
                          top și oportunități de carieră globală. Garantează o
                          educație de înaltă calitate, recunoscută și respectată
                          de instituții și angajatori.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img src={Mortar} className="card-img-top" alt="Tocă" />
                      <div className="card-body">
                        <p className="card-text montserrat-sans-p">
                          Cambridge Elite English utilizează metode de predare
                          moderne și interactive, adaptate pentru a face
                          învățarea atractivă și eficientă. Materialele de
                          studiu Cambridge, combinate cu tehnici de predare
                          inovative, asigură că fiecare lecție este captivantă
                          și plină de informații valoroase.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img src={Checkbox} className="card-img-top" alt="Bifă" />
                      <div className="card-body">
                        <p className="card-text montserrat-sans-p">
                          Cursurile sunt predate de lectori autorizați și sunt
                          evaluate periodic pentru a menține standardele
                          educaționale ridicate și actualizate. Experiența vastă
                          și dedicarea acestora garantează o atenție
                          personalizată și o abordare pedagogică atent adaptată
                          nevoilor fiecărui elev.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        id="exam-img"
                        src={Exam}
                        className="card-img-top"
                        alt="Examen"
                      />
                      <div className="card-body">
                        <p className="card-text montserrat-sans-p">
                          Fiecare cursant beneficiază de o testare inițială
                          gratuită și de sesiune demonstrativă pentru a se
                          asigura că este plasat în grupa corectă. În plus,
                          simulările de examen oferite gratuit ajută la
                          monitorizarea progresului și la pregătirea eficientă
                          pentru examenele Cambridge.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img
                        src={Schedule}
                        className="card-img-top"
                        alt="Calendar"
                      />
                      <div className="card-body">
                        <p className="card-text montserrat-sans-p">
                          Cursurile oferă flexibilitatea necesară pentru a
                          învăța în propriul ritm și program, online, fiind
                          ideale pentru familiile ocupate. Prețurile accesibile,
                          pentru că discutăm de pregătire Cambridge, fac aceste
                          cursuri o opțiune excelentă din punct de vedere al
                          raportului calitate-preț.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div className="card h-100">
                      <img src={Book} className="card-img-top" alt="Carte" />
                      <div className="card-body">
                        <p className="card-text montserrat-sans-p">
                          Accesul la manualele Cambridge și resursele online
                          facilitează studiul și aprofundarea cunoștințelor.
                          Aceste resurse sunt concepute pentru a sprijini și a
                          îmbogăți experiența de învățare, oferind suport
                          continuu și oportunități de practică suplimentară.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="line-about">
                  <img src={LineThreeAbout} alt="" />
                </div>
                <div className="doodle-about-one">
                  <img src={KidThree} alt="" />
                </div>
                <div className="doodle-about-two">
                  <img src={KidFour} alt="" />
                </div>
              </div>
            </div>
          </section>

          <section className="classes" id="classes">
            <div className="container-fluid">
              <h2 className="text-center josefin-sans-h2">Cursuri</h2>
              <div className="card-wrapper d-flex justify-content-center align-content-center gap-3">
                <Link to="/cursuri">
                  <div className="card col-lg-3 col-md-3 col-sm-12">
                    <img src={KidsClasses} alt="Copii discutând" />
                    <div className="card-body m-0">
                      <h3 className="card-title josefin-sans-h3 text-center py-2">
                        Cursuri pentru copii
                      </h3>
                      <div className="card-info d-flex justify-content-between align-items-center p-2">
                        <div className="time">
                          <span>
                            <img src={clock} alt="Ore" />
                          </span>
                          <p className="card-time josefin-sans-h3">20 de ore</p>
                        </div>
                        <div className="person">
                          <span>
                            <img src={person} alt="Nr. de studenți" />
                          </span>
                          <p className="card-students josefin-sans-h3">
                            8 studenți
                          </p>
                        </div>
                        <div className="location">
                          <span>
                            <img src={location} alt="Locație" />
                          </span>
                          <p className="card-location josefin-sans-h3">
                            Online
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/cursuri">
                  <div className="card  col-lg-3 col-md-3 col-sm-12">
                    <img src={TeenClasses} alt="Adolescenți discutând" />
                    <div className="card-body">
                      <h3 className="card-title josefin-sans-h3 text-center py-2">
                        Cursuri pentru adolescenți
                      </h3>
                      <div className="card-info d-flex justify-content-between align-items-center p-2">
                        <div className="time">
                          <span>
                            <img src={clock} alt="Ore" />
                          </span>
                          <p className="card-time josefin-sans-h3">20 de ore</p>
                        </div>
                        <div className="person">
                          <span>
                            <img src={person} alt="Nr. de studenți" />
                          </span>
                          <p className="card-students josefin-sans-h3">
                            8 studenți
                          </p>
                        </div>
                        <div className="location">
                          <span>
                            <img src={location} alt="Locație" />
                          </span>
                          <p className="card-location josefin-sans-h3">
                            Online
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="/cursuri">
                  <div className="card col-lg-3 col-md-3 col-sm-12">
                    <img src={AdultClasses} alt="Adulți discutând" />
                    <div className="card-body">
                      <h3 className="card-title josefin-sans-h3 text-center py-2">
                        Cursuri pentru adulți
                      </h3>
                      <div className="card-text">
                        <div className="card-info d-flex justify-content-between align-items-center p-2">
                          <div className="time align-items-center">
                            <span>
                              <img src={clock} alt="Ore" />
                            </span>
                            <p className="card-time josefin-sans-h3">
                              20 de ore
                            </p>
                          </div>
                          <div className="person align-items-center">
                            <span>
                              <img src={person} alt="Nr. de studenți" />
                            </span>
                            <p className="card-students josefin-sans-h3">
                              8 studenți
                            </p>
                          </div>
                          <div className="location align-items-center">
                            <span>
                              <img src={location} alt="Locație" />
                            </span>
                            <p className="card-location josefin-sans-h3">
                              Online
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="line-classes">
              <img src={LineFourClasses} alt="" />
            </div>
          </section>

          <section className="test" id="test">
            <div className="container">
              <h2 className="text-center josefin-sans-h2">
                Testați-vă nivelul de limba engleză
              </h2>
              <div className="info-test row d-flex justify-content-center text-center montserrat-sans-p">
                <p>
                  Puteți afla nivelul dvs. de engleză printr-un test simplu și
                  rapid, conceput pentru a corespunde nevoilor și obiectivelor
                  dvs. Testul conține între 30-60 de întrebări cu variante
                  multiple de răspuns, cu limită de timp. La final, veți putea
                  vedea scorul obținut și veți primi recomandări personalizate
                  pentru îmbunătățirea abilităților lingvistice.
                </p>
              </div>
              <div className="row d-flex justify-content-center text-center">
                <div className="button-test btn btn-secondary btn-lg rounded-pill montserrat-sans-p">
                  <Link to="/test-online"> Testează-te aici</Link>
                </div>
              </div>
              <div className="line-test">
                <img src={LineFiveTest} alt="" />
              </div>
              <div className="clouds-test">
                <img src={CloudsTest} alt="" />
              </div>
              <div className="cloud-sun">
                <img src={CloudSun} alt="" />
              </div>
              <div className="trees">
                <img src={Trees} alt="" />
              </div>
              <div className="doodle-test-one">
                <img src={KidFive} alt="" />
              </div>
              <div className="doodle-test-two">
                <img src={KidSix} alt="" />
              </div>
            </div>
          </section>

          <section className="contact" id="contact">
            <div className="container">
              <div className="row">
                <h2 className="col-12 text-center josefin-sans-h2">
                  Contactează-ne
                </h2>
              </div>
              <div className="info row d-flex col-12">
                <div className="col-lg-6 col-md-12">
                  <div className="contact-info row d-flex-wrap justify-content-center montserrat-sans-p m-0">
                    <div className="col-md-6 col-sm-12 mb-4 d-flex flex-column align-items-center">
                      <span>
                        <img src={Adress} className="mx-2" alt="Adresă" />
                      </span>
                      <h3 className="josefin-sans-h3">ADRESĂ:</h3>
                      <p>Bulevardul Vasile Pârvan 4, Timișoara 300223</p>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-4 d-flex flex-column align-items-center">
                      <span>
                        <img src={Email} className="mx-2" alt="Email" />
                      </span>
                      <h3 className="josefin-sans-h3">EMAIL:</h3>
                      <a href="mailto:hello@cambridge-elite-english.ro">
                        hello@cambridge-elite-english.ro
                      </a>
                    </div>
                    <div className="phone col-md-6 col-sm-12 mb-4 d-flex flex-column align-items-center">
                      <span>
                        <img
                          src={Phone}
                          className="mx-2"
                          alt="Număr de telefon"
                        />
                      </span>
                      <h3 className="josefin-sans-h3">TELEFON:</h3>
                      <a href="tel:0740237234">+40 740 237 234</a>
                    </div>
                    <div className="social col-md-6 col-sm-12 mb-4 d-flex flex-column align-items-center">
                      <p className="social-about text-center">
                        Rămâi la curent cu cele mai recente noutăți, evenimente
                        și resurse educaționale urmărindu-ne pe rețelele
                        sociale.
                      </p>
                      <div className="socials-img d-flex justify-content-center">
                        <a href="https://www.facebook.com/">
                          <img src={Facebook} className="mx-2" alt="Facebook" />
                        </a>
                        <a href="https://www.instagram.com/">
                          <img
                            src={Instagram}
                            className="mx-2"
                            alt="Instagram"
                          />
                        </a>
                        <a href="https://www.tiktok.com/">
                          <img src={TikTok} className="mx-2" alt="TikTok" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="map col-lg-6 col-md-12">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.2008363156433!2d21.2316152!3d45.7471195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47455d84610655bf%3A0xfd169ff24d29f192!2sWest%20University%20of%20Timi%C8%99oara!5e0!3m2!1sen!2sro!4v1722886470794!5m2!1sen!2sro"
                    style={{ border: 0 }}
                    allowfullscreen=""
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    className="w-100 h-100"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
