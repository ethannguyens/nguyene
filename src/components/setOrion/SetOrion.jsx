import React, {PropTypes} from 'react';
import {mobileDevice} from '../../modules/utility';

require('./SetOrion.scss');

class SetOrion extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className={this.props.class ? `setOrion ${this.props.class}` : `setOrion`}>
        <div className="setOrion-content">
          {this.props.highlight ? <div className="setOrion-highlight">{this.props.highlight}</div> : undefined}
          {this.props.title ? <div className="setOrion-title">{this.props.title}</div> : undefined}
          {this.props.subtitle ? <div className="setOrion-subtitle">{this.props.subtitle}</div> : undefined}
          {this.props.text ? <div className="setOrion-text">T{this.props.text} </div> : undefined}

          <div className="Grid setOrion-widgets">
            {this.props.widgets.map((widget, i) => {
              return (<div className={`Grid-cell setOrion-widget setOrion-widgets-${i}`} key={i}>{widget}</div>);
            })}
          </div>

          {this.props.button? <a className="setOrion-button" href={this.props.link}>{this.props.button}</a> : undefined}
        </div>
      </div>
    );
  }
}

SetOrion.propTypes = {
  widgets: PropTypes.array,
  class: PropTypes.string,
  image: PropTypes.string,
  highlight: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  button: PropTypes.string,
  link: PropTypes.string
};

export default SetOrion;
