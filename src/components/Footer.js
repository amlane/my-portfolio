import React from 'react';

import './Footer.scss';

function Footer() {
    return (
        <footer className="footer-cta">
            <nav className="ftr-link-cta">
                <a href="www.amandalane.me">Portfolio</a>{" "}
                <a href="www.amandalane.me/blog">Blog</a>{" "}
                <a href="www.amandalane.me/about">About</a>{" "}
            </nav>
            <p>amandathedev@outlook.com</p>
            <nav className="footer-navigation">
                <i className="fab fa-github"></i>
                <i className="fab fa-twitter"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fas fa-envelope"></i>
            </nav>
        </footer>
    )
}

export default Footer;