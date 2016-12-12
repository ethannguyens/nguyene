import React, {PropTypes} from 'react';
import {mobileDevice} from '../../modules/utility';

// require('./setOrion.scss');

class SetOrion extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className={this.props.class ? `setOrion ${this.props.class}` : `setOrion`}>
        <div className="setOrionContent">
          {this.props.highlight ? <div className="setOrionContent_highlight">{this.props.highlight}</div> : undefined}
          {this.props.title ? <div className="setOrionContent_title">{this.props.title}</div> : undefined}
          {this.props.subtitle ? <div className="setOrionContent_subtitle">{this.props.subtitle}</div> : undefined}
          {this.props.text ? <div className="setOrionContent_text">T{this.props.text} </div> : undefined}
          {this.props.widgets.map(widget => {
            return widget;
          })}
          {this.props.buttonText? <a className="setOrionContent_button" href={this.props.buttonLink}>{this.props.buttonText}</a> : undefined}
        </div>
      </div>
    );
  }
}

SetOrion.propTypes = {
  class: PropTypes.string,
  image: PropTypes.string,
  highlight: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string
};

export default SetOrion;
