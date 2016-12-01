import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = () => {
  return (
    <nav>
      <div id="logo">Your Logo here</div>
      <label htmlFor="drop" className="toggle">Menu</label>
      <input type="checkbox" id="drop"/>
      <ul className="menu">
        <li><a href="#">Home</a></li>
        <li>
          <label htmlFor="drop-1" className="toggle">WordPress +</label>
          <a href="#">WordPress</a>
          <input type="checkbox" id="drop-1"/>
          <ul>
            <li><a href="#">Themes and stuff</a></li>
            <li><a href="#">Plugins</a></li>
            <li><a href="#">Tutorials</a></li>
          </ul>

        </li>
        <li>
          <label htmlFor="drop-2" className="toggle">Web Design +</label>
          <a href="#">Web Design</a>
          <input type="checkbox" id="drop-2"/>
          <ul>
            <li><a href="#">Resources</a></li>
            <li><a href="#">Links</a></li>
            <li>
              <label htmlFor="drop-3" className="toggle">Tutorials +</label>
              <a href="#">Tutorials</a>
              <input type="checkbox" id="drop-3"/>

              <ul>
                <li><a href="#">HTML/CSS</a></li>
                <li><a href="#">jQuery</a></li>
                <li><a href="#">Other</a></li>
              </ul>
            </li>
          </ul>
        </li>
        <li><a href="#">Graphic Design</a></li>
        <li><a href="#">Inspiration</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
