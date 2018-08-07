import React, { Component } from 'react';
import IconHome from './IconHome';
import IconAircraft from './IconAircraft';
import IconKey from './IconKey';
import IconMap from './IconMap';

class Sidebar extends Component {
  render() {
    return (
        <div className="sidebar">
          <ul className="side-nav">
            <li className = "side-nav__item"> 
              <a href="#" className="side-nav__link">
                <IconHome width="1.75rem" height="1.75rem"/>
                <span>Hotel</span>
              </a>
            </li>
            <li className = "side-nav__item"> 
              <a href="#" className="side-nav__link">
                <IconAircraft width="1.75rem" height="1.75rem"/>
                <span>Flight</span>
              </a>
            </li>
            <li className = "side-nav__item"> 
              <a href="#" className="side-nav__link">
                <IconKey width="1.75rem" height="1.75rem"/>
                <span>Car rental</span>
              </a>
            </li>
            <li className = "side-nav__item"> 
              <a href="#" className="side-nav__link">
                <IconMap width="1.75rem" height="1.75rem"/>
                <span>Tours</span>
              </a>
            </li>
          </ul>

          <div className="legal">
            &copy; 2018 by trillo. All rights reserved.
          </div>

        </div>
    );
  }
}

export default Sidebar;