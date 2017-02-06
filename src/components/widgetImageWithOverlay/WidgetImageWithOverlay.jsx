import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

require('./WidgetImageWithOverlay.scss');

class WidgetImageWithOverlay extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.eventHandler = this.eventHandler.bind(this);
  }

  componentDidMount() {
    this.eventHandler();
  }

  eventHandler() {
    const menu = document.querySelector('.WidgetImageWithOverlay_menuIcon');
    const WidgetImageWithOverlay = document.querySelector('.WidgetImageWithOverlay');
    if (menu) {
      menu.addEventListener('click', () => {
        if (WidgetImageWithOverlay.classList.contains('active')) WidgetImageWithOverlay.classList.remove('active');
        else WidgetImageWithOverlay.classList.add('active');
      });
    }
  }

  render() {
    return (
    <div className="WidgetImageWithOverlay">

      <nav className="WidgetImageWithOverlay-nav">
        <ul className="Grid WidgetImageWithOverlay-nav-menu">
          {this.props.WidgetImageWithOverlay.map((item, i) => {
            return (
              <li key={i} className={`Grid-cell WidgetImageWithOverlay-nav-menu__item WidgetImageWithOverlay-nav-menu__item--${item.id}`}>
                <Link key={i} className={`WidgetImageWithOverlay-nav-menu__item-link WidgetImageWithOverlay-nav-menu__item-link--${item.id}`} to={`/${item.link}`} activeClassName="active">{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="WidgetImageWithOverlay-content">
        {this.props.highlight ? <div className="pWidgetImageWithOverlay-highlight">{this.props.highlight}</div> : undefined}
        {this.props.title ? <div className="WidgetImageWithOverlay-title">{this.props.title}</div> : undefined}
        {this.props.subtitle ? <div className="WidgetImageWithOverlay-subtitle">{this.props.subtitle}</div> : undefined}
        {this.props.text ? <div className="WidgetImageWithOverlay-text">{this.props.text} </div> : undefined}
        {this.props.button ? <div className="WidgetImageWithOverlay-button">{this.props.button} </div> : undefined}
        {this.props.link ? <a href={} className="WidgetImageWithOverlay-link">{this.props.link} </a> : undefined}
      </div>

      <nav className="WidgetImageWithOverlay-nav-term">
        <ul className="Grid WidgetImageWithOverlay-nav-term-items">
          {this.props.term.map((item, i) => {
            return (
              <li key={i} className={`Grid-cell WidgetImageWithOverlay-nav-term__item WidgetImageWithOverlay-nav-term__item--${item.id}`}>
                <Link key={i} className={`WidgetImageWithOverlay-nav-term__item-link WidgetImageWithOverlay-nav-term__item-link--${item.id}`} to={`/${item.link}`} activeClassName="active">{item.text}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <nav className="WidgetImageWithOverlay-nav-social">
        <ul className="Grid WidgetImageWithOverlay-nav-items">
          {this.props.social.map((item, i) => {
            return (
              <li key={i} className={`Grid-cell WidgetImageWithOverlay-nav-social__item WidgetImageWithOverlay-nav-social__item--${item.id}`}>
                <a href={item.link} key={i} className={`WidgetImageWithOverlay-nav-social__item-link WidgetImageWithOverlay-nav-social__item-link--${item.id}`}>{item.text}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  )};
}

WidgetImageWithOverlay.propTypes = {
  WidgetImageWithOverlay: PropTypes.array.isRequired,
  term: PropTypes.array,
  social: PropTypes.array,
  highlight: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string
};

export default WidgetImageWithOverlay;
