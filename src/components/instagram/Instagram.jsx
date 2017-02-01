import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as instagramActions from '../../actions/instagramActions';

export class Instagram extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      course: Object.assign({}, props.instagram)
    };
  }

  render(){
    return (
      <div className={this.props.class ? `instagram ${this.props.class}` : `instagram`}>
        <div className="instagramContent">
          {this.props.highlight ? <div className="instagram_highlight">{this.props.highlight}</div> : undefined}
          {this.props.title ? <div className="instagram_title">{this.props.title}</div> : undefined}
          {this.props.subtitle ? <div className="instagram_subtitle">{this.props.subtitle}</div> : undefined}
          {this.props.text ? <div className="instagram_text">{this.props.text} </div> : undefined}
          {this.props.buttonText? <a className="instagram_button" href={this.props.buttonLink}>{this.props.buttonText}</a> : undefined}
        </div>
      </div>
    );
  }
}

Instagram.propTypes = {
  class: PropTypes.string,
  highlight: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string
};

function mapStateToProps(state, ownProps) {
  return {
    instagram: state.instagram
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(instagramActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Instagram);
