import React, { Component } from 'react';
import logo from './logo.png';
import IconMagnifyingGlass from './IconMagnifyingGlass';
import IconChat from './IconChat';
import IconBookmark from './IconBookmark';

class Header extends Component {
  render() {
    return (
      <div className="header">
          <img src={logo} className="logo"/>

          <form action="#" className="search">
            <input type="text" className="search__input" placeholder="Search hotels"/>
            <button className="search__button">
                <IconMagnifyingGlass width="2rem" height="2rem"/>
            </button>
          </form>
      
          <nav className = "user-nav">
            <div className = "user-nav__icon-box">
                <IconBookmark width="2.25rem" height="2.25rem"/>
                <span className="user-nav__notification">7</span>
            </div>

            <div className = "user-nav__icon-box">
                <IconChat width="2.25rem" height="2.25rem"/>
                <span className="user-nav__notification">13</span>
            </div>
          </nav>

      </div>
    );
  }
}

export default Header;