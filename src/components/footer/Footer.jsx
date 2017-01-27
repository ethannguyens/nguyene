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
    const menu = document.querySelector('.header_menuIcon');
    const header = document.querySelector('.header');
    if (menu) {
      menu.addEventListener('click', () => {
        if (header.classList.contains('active')) header.classList.remove('active');
        else header.classList.add('active');
      });
    }
  }

  render() {
    return (
    <div className="footer">
      <nav className="footer_nav">
        <ul className="Grid header_navItems">
          {this.props.footer.map((item, i) => {
            return (
              <li key={i} className={`header_navItem header_navItem-${item.id}`}>
                <Link key={i} className={`header_navItemLink header_navItemLink-${item.id}`} to={`/${item.link}`} activeClassName="active">{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  )};
}

Footer.propTypes = {
  footer: PropTypes.array.isRequired,
  term: PropTypes.array.isRequired,
  social: PropTypes.array.isRequired,
};

export default Footer;
