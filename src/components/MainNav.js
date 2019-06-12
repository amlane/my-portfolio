import React from 'react';
import {Link} from 'react-router-dom';

import './MainNav.scss';

function MainNav() {
    return (
        <header className="main-navigation">
            <h1 className="title">Amanda Lane</h1>
            <nav className="mn-link-cta">
                <Link to="/" className="slide-left one">Portfolio</Link>{" "}
                <Link className="slide-left two">Blog</Link>{" "}
                <Link to="/about" className="slide-left three">About</Link>{" "}
            </nav>
        </header>
    )
}

export default MainNav;

