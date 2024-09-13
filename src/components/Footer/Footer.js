import React from "react";

import "./Footer.css";
import FooterLogo from "../../assets/images/logoFooter.svg";

export const Footer = () => (
  <footer className="footer-block">
    <div className="footer-block__padding">
      <div>
        <img className="footer-block__logo" src={FooterLogo} alt="logo" />
      </div>
      <div className="footer-links">
        <ul className="footer-links__list">
          <li className="footer-links__list--header">About</li>
          <li className="footer-links__list--item">How Triphouse works</li>
          <li className="footer-links__list--item">Careers</li>
          <li className="footer-links__list--item">Privacy</li>
          <li className="footer-links__list--item">Terms</li>
        </ul>
        <ul className="footer-links__list">
          <li className="footer-links__list--header">Property types</li>
          <li className="footer-links__list--item">Guest houses</li>
          <li className="footer-links__list--item">Hotels</li>
          <li className="footer-links__list--item">Apartments</li>
          <li className="footer-links__list--item">Villas</li>
          <li className="footer-links__list--item">Holiday homes</li>
          <li className="footer-links__list--item">Hostels</li>
        </ul>
        <ul className="footer-links__list">
          <li className="footer-links__list--header">Support</li>
          <li className="footer-links__list--item">Contact Customer Service</li>
          <li className="footer-links__list--item">FAQ</li>
        </ul>
      </div>
      <div className="footer-block__footnote">
        © 2022Triphouse, Inc. All rights reserved
      </div>
    </div>
  </footer>
);
