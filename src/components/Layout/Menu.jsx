import React from "react";
import logo from "../../assets/Logo.png";
import "./Menu.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Menu() {
  return (
    <nav className="navbar navbar-expand-lg bg-gradient sticky-top">
      <div className="container-fluid">
        <HashLink to="/#top" className="navbar-brand col-lg-4">
          <img src={logo} alt="" />
        </HashLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse josefin-sans-menu"
          id="navbarNav"
        >
          <ul className="navbar-nav col-lg-8 ps-4">
            <li className="nav-item">
              <HashLink className="nav-link" to="/#top">
                Acasă
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#about">
                Despre noi
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#classes">
                Cursuri
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#test">
                Testare
              </HashLink>
            </li>
            <li className="nav-item">
              <HashLink className="nav-link" to="/#contact">
                Contact
              </HashLink>
            </li>
          </ul>
          <div className="button-ghost btn btn-outline-secondary btn-lg rounded-pill">
            <Link to="/test-online">Testează-te</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Menu;
