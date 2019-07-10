import React from "react";
import { Link } from "react-router-dom";

import "./MainNav.scss";

class MainNav extends React.Component {
  render() {
    return (
      <header className="main-navigation">
        <h1 className="title">Your Website</h1>
        <nav className="mn-link-cta">
          <Link to="/" className="slide-left one">
            Home
          </Link>{" "}
          <Link className="slide-left two">Contact Us</Link>{" "}
          <Link to="/about" className="slide-left three">
            About
          </Link>{" "}
        </nav>
      </header>
    );
  }
}

export default MainNav;
