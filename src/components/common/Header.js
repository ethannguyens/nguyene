import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Header = () => {
  return (
  <nav>
    <IndexLink to="/" activeClassName="active">Home</IndexLink>
    {" | "}
    <Link to="/portfolio" activeClassName="active">Portfolio</Link>
    {" | "}
    <Link to="/education" activeClassName="active">Education</Link>
    {" | "}
    <Link to="/about" activeClassName="active">About</Link>
    {" | "}
    <Link to="/blog" activeClassName="active">Blog</Link>
    {" | "}
    <Link to="/resume" activeClassName="active">Resume</Link>
    {" | "}
    <Link to="/contact" activeClassName="active">Contact</Link>
    {" | "}
    <Link to="/courses" activeClassName="active">Course</Link>
    {" | "}
    {<LoadingDots interval={100} dots={20}/>}
  </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
