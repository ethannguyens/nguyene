import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

class WidgetBackground extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div className="widgetBackground">
        <div className="widget">
          <div className="widgetBackground_container">
            {this.props.vimeoId ? <iframe
              src={`https://player.vimeo.com/video/${this.props.vimeoId}?api=1&autoplay=1&loop=1&badge=0title=0&byline=0&portrait=0&background=1`}
              frameBorder="0" volume="0" allowFullScreen="1"/> : undefined}

            {this.props.youtubeId ? <iframe
              src={`https://www.youtube.com/embed/${this.props.youtubeId}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${this.props.youtubeoId}`}
              frameBorder="0" volume="0" allowFullScreen="1"/> : undefined}

            {this.props.image ? <img src={this.props.image}/> : undefined}
          </div>
        </div>
        <div className="widgetBackgroundContent">
          {this.props.highlight ? <div className="widgetVideoContent_title">{this.props.highlight}</div> : undefined}
          {this.props.title ? <div className="widgetVideoContent_subtitle">{this.props.title}</div> : undefined}
          {this.props.subtitle ? <div className="widgetVideoContent_text">{this.props.subtitle}</div> : undefined}
          {this.props.text ? <div className="widgetVideoContent_text">T{this.props.text} </div> : undefined}
          {this.props.buttonText? <a className="button widgetVideoContent_text" href={this.props.buttonLink}>{this.props.buttonText}</a> : undefined}
        </div>
      </div>
    );
  }
}

WidgetBackground.propTypes = {
  image: PropTypes.string,
  youtubeId: PropTypes.string,
  vimeoId: PropTypes.string,
  highlight: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.bool.isRequired
};

export default WidgetBackground;
