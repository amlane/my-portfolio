import React from 'react';

import './SideNav.scss';

function SideNav() {
    return (
        <nav className="side-navigation">
            <a href="https://github.com/amlane" target="_blank">
              <i className="fab fa-github"></i></a> 
            <i className="fab fa-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fas fa-envelope"></i>
        </nav>
    )
}

export default SideNav;