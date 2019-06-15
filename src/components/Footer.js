import React from "react";

import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer-cta">
      <nav className="ftr-link-cta">
        <a href="www.amandalane.me">Home</a>{" "}
        <a href="www.amandalane.me/blog">Contact Us</a>{" "}
        <a href="www.amandalane.me/about">About</a>{" "}
      </nav>

      <nav className="footer-navigation">
        <i className="fab fa-github" />
        <i className="fab fa-twitter" />
        <i className="fab fa-linkedin-in" />
        <i className="fas fa-envelope" />
      </nav>
    </footer>
  );
}

export default Footer;
