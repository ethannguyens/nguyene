import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import LoadingDots from './LoadingDots';

const Footer = () => {
  return (
    <div className="footer">
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
      </nav>
      <div className="footer_copyright">
        <p className="footer_coppyrightText">© 2016 Ethan Nguyen. All rights reserved. Ethan Nguyen Web App and Design</p>
      </div>
      <div className="footer_term">
        <nav className="footer_termNav">
          <Link to="/term" activeClassName="active">Terms of Service</Link>
          {" | "}
          <Link to="/return" activeClassName="active">Return Policy</Link>
          {" | "}
          <Link to="/policy" activeClassName="active">Privacy Policy</Link>
        </nav>
      </div>
    </div>
  );
};

Footer.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Footer;
