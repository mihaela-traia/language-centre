import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import Logo from "../../assets/Logo.png";
import Facebook from "../../assets/facebook.png";
import Instagram from "../../assets/instagram.png";
import TikTok from "../../assets/tiktok.png";
import locationSmall from "../../assets/location-v.png";
import EmailSmall from "../../assets/mail-v.png";
import PhoneSmall from "../../assets/phone-v.png";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <footer>
      <div className="container-fluid row montserrat-sans-p">
        <div className="left-text col col-lg-3 flex gap-4">
          <div className="logo p-2 g-col-3">
            <HashLink to="/#top">
              <img src={Logo} alt="Logo Cambridge Elite English" />
            </HashLink>
          </div>
          <div className="p-2 g-col-3">
            <p>Elevate Your English,</p>
            <p>Achieve with Cambridge Elite!</p>
          </div>
          <div className="socials-img d-flex justify-content-flex-start p-2 g-col-3">
            <a href="https://www.facebook.com/">
              <img src={Facebook} className="mx-2" alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={Instagram} className="mx-2" alt="Instagram" />
            </a>
            <a href="https://www.tiktok.com/">
              <img src={TikTok} className="mx-2" alt="TikTok" />
            </a>
          </div>
        </div>

        <div className="menu col col-lg-2">
          <h2 className="josefin-sans-h2">Menu</h2>
          <div className="list-menu d-flex flex-column">
            <HashLink to="/#top">Acasă </HashLink>
            <HashLink to="/#about">Despre noi </HashLink>
            <HashLink to="/#classes">Cursuri </HashLink>
            <HashLink to="/#test">Testare </HashLink>
            <HashLink to="/#contact">Contact </HashLink>
          </div>
        </div>

        <div className="information col col-lg-4">
          <h2>Informații</h2>
          <div className="information d-flex flex-column">
            <p>Cerificat de competență lingvistică</p>
            <p>Politică de utilizare Cookie-uri</p>
            <p>Politică de confidențialitate</p>
          </div>
        </div>

        <div className="contact col-lg-3">
          <h2>Contact</h2>
          <div className="contact-more row">
            <div className="location d-flex align-items-center col-12 mb-3">
              <span>
                <img src={locationSmall} className="mx-2" alt="Adresă" />
              </span>
              <p className="mb-0">
                Bulevardul Vasile Pârvan 4, Timișoara 300223
              </p>
            </div>
            <div className="mail d-flex align-items-center col-12 mb-3">
              <span>
                <img src={EmailSmall} className="mx-2" alt="Email" />
              </span>
              <p className="mb-0">
                <a href="mailto:hello@cambridge-elite-english.ro">
                  hello@cambridge-elite-english.ro
                </a>
              </p>
            </div>
            <div className="phone d-flex align-items-center col-12 mb-3">
              <span>
                <img src={PhoneSmall} className="mx-2" alt="Număr de telefon" />
              </span>
              <p className="mb-0">
                <a href="tel:0740237234">+40 740 237 234</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="line mx-auto my-4"></div>
      <p className="copyright">
        Copyright © Cambridge Elite English. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
