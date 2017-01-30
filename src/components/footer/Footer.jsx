import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

class Footer extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.eventHandler = this.eventHandler.bind(this);
  }

  componentDidMount() {
    this.eventHandler();
  }

  eventHandler() {
    const menu = document.querySelector('.footer_menuIcon');
    const footer = document.querySelector('.footer');
    if (menu) {
      menu.addEventListener('click', () => {
        if (footer.classList.contains('active')) footer.classList.remove('active');
        else footer.classList.add('active');
      });
    }
  }

  render() {
    return (
    <div className="footer">

      <nav className="footer_nav-menu">
        <ul className="Grid footer_navItems">
          {this.props.footer.map((item, i) => {
            return (
              <li key={i} className={`footer_navItem footer_navItem-${item.id}`}>
                <Link key={i} className={`footer_navItemLink footer_navItemLink-${item.id}`} to={`/${item.link}`} activeClassName="active">{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {this.props.highlight ? <div className="footer_highlight">{this.props.highlight}</div> : undefined}
      {this.props.title ? <div className="footer_title">{this.props.title}</div> : undefined}
      {this.props.subtitle ? <div className="footer_subtitle">{this.props.subtitle}</div> : undefined}
      {this.props.text ? <div className="footer_text">{this.props.text} </div> : undefined}

      <nav className="footer_nav-term">
        <ul className="Grid footer_navItems">
          {this.props.term.map((item, i) => {
            return (
              <li key={i} className={`footer_navItem footer_navItem-${item.id}`}>
                <Link key={i} className={`footer_navItemLink footer_navItemLink-${item.id}`} to={`/${item.link}`} activeClassName="active">{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav className="footer_nav-social">
        <ul className="Grid footer_navItems">
          {this.props.social.map((item, i) => {
            return (
              <li key={i} className={`footer_navItem footer_navItem-${item.id}`}>
                <Link key={i} className={`footer_navItemLink footer_navItemLink-${item.id}`} to={`/${item.link}`} activeClassName="active">{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  )};
}

Footer.propTypes = {
  footer: PropTypes.array,
  term: PropTypes.array,
  social: PropTypes.array,
  highlight: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string
};

export default Footer;
