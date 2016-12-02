import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
const utility = require('../../modules/utility');

class WidgetBackground extends React.Component {
  constructor(props) {
    super(props);
    this.mobileDevice = utility.mobileDevice();
    this.background = this.background.bind(this);
  }

  media(youtubeId, vimeoId, image) {
    let media;
    if (vimeoId) {
      media = <iframe
        src={`https://player.vimeo.com/video/${vimeoId}?api=1&autoplay=1&loop=1&badge=0title=0&byline=0&portrait=0&background=1`}
        frameBorder="0" allowFullScreen="1"/>;
    } else if (youtubeId) {
      media =  <iframe
        src={`https://www.youtube.com/embed/${youtubeId}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${youtubeId}`}
        frameBorder="0" allowFullScreen="1"/>
    } else if (image) {
      media = <img src={image}/>;
    }
    return <div className="widgetBackground_media">{media}</div>;
  }

  background(youtubeId, vimeoId, image) {
    let background;
    if (!this.mobileDevice) {
      if (vimeoId) {
        background = <iframe
          src={`https://player.vimeo.com/video/${vimeoId}?api=1&autoplay=1&loop=1&badge=0title=0&byline=0&portrait=0&background=1`}
          frameBorder="0" allowFullScreen="1"/>;
      } else if (this.props.youtubeId){
        background =  <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?controls=0&showinfo=0&rel=0&autoplay=1&loop=1&playlist=${youtubeId}`}
          frameBorder="0" allowFullScreen="1"/>
      }
    } else {
      background = <img src={image}/>;
    }
    return background;
  }

  render(){
    return (
      <div className={this.props.class ? `widgetBackground ${this.props.class}` : `widgetBackground`}>
          <div className="widgetBackground_background">{this.background(this.props.youtubeId, this.props.vimeoId, this.props.image)}</div>
        <div className="widgetBackgroundContent">
          {this.props.highlight ? <div className="highlight widgetBackgroundContent_highlight">{this.props.highlight}</div> : undefined}
          {this.props.title ? <div className="title widgetBackgroundContent_title">{this.props.title}</div> : undefined}
          {this.props.subtitle ? <div className="subtitle widgetBackgroundContent_subtitle">{this.props.subtitle}</div> : undefined}
          {this.props.text ? <div className="text widgetBackgroundContent_text">T{this.props.text} </div> : undefined}
          {this.media(this.props.mediaYoutubeId, this.props.mediaVimeoId, this.mediaImage)}
          {this.props.buttonText? <a className="button widgetBackgroundContent_button" href={this.props.buttonLink}>{this.props.buttonText}</a> : undefined}
        </div>
      </div>
    );
  }
}

WidgetBackground.propTypes = {
  class: PropTypes.string,
  image: PropTypes.string,
  youtubeId: PropTypes.string,
  vimeoId: PropTypes.string,
  highlight: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  mediaVimeoId: PropTypes.string,
  mediaYoutubeId: PropTypes.string,
  mediaImage: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string
};

export default WidgetBackground;
