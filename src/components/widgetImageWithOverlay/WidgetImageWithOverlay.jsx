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
  }

  render() {
    return (
    <div className={`widgetImageWithOverlay ${this.props.class}`}>
      <img src={this.props.img} className="widgetImageWithOverlay-image"/>
      <div className="widgetImageWithOverlay-content">
        {this.props.highlight ? <div className="widgetImageWithOverlay-highlight">{this.props.highlight}</div> : undefined}
        {this.props.title ? <div className="widgetImageWithOverlay-title">{this.props.title}</div> : undefined}
        {this.props.subtitle ? <div className="widgetImageWithOverlay-subtitle">{this.props.subtitle}</div> : undefined}
        {this.props.text ? <div className="widgetImageWithOverlay-text">{this.props.text} </div> : undefined}
        {this.props.link ? <a href={this.props.link} className="widgetImageWithOverlay-button">{this.props.button} </a> : undefined}
      </div>
    </div>
  )};
}

WidgetImageWithOverlay.propTypes = {
  class: PropTypes.string,
  img: PropTypes.string,
  term: PropTypes.array,
  social: PropTypes.array,
  highlight: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string
};

export default WidgetImageWithOverlay;
