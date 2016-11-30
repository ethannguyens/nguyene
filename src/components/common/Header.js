import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = () => {
  return (
    <div className="header">
      <nav className="header_nav">
        <IndexLink className="header_navItem header_navItem-home" to="/" activeClassName="active">Home</IndexLink>
        <Link className="header_navItem header_navItem-portfolio" to="/portfolio" activeClassName="active">Portfolio</Link>
        <Link className="header_navItem header_navItem-education" to="/education" activeClassName="active">Education</Link>
        <Link className="header_navItem header_navItem-about" to="/about" activeClassName="active">About</Link>
        <Link className="header_navItem header_navItem-blog" to="/blog" activeClassName="active">Blog</Link>
        <Link className="header_navItem header_navItem-resume" to="/resume" activeClassName="active">Resume</Link>
        <Link className="header_navItem header_navItem-contact" to="/contact" activeClassName="active">Contact</Link>
      </nav>
    </div>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
