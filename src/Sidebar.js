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
                <IconHome/>
                <span>Hotel</span>
              </a>
            </li>
            <li className = "side-nav__item"> 
              <a href="#" className="side-nav__link">
                <IconAircraft/>
                <span>Hotel</span>
              </a>
            </li>
            <li className = "side-nav__item"> 
              <a href="#" className="side-nav__link">
                <IconKey/>
                <span>Hotel</span>
              </a>
            </li>
            <li className = "side-nav__item"> 
              <a href="#" className="side-nav__link">
                <IconMap/>
                <span>Hotel</span>
              </a>
            </li>
          </ul>
        </div>
    );
  }
}

export default Sidebar;