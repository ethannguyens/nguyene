import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';

const Video = () => {
  return (
    <div className="widgetVideo">
      <div className="widgetVideo_videoContainer">
        <div className="widgetVideo_video">
          <iframe
            src="https://player.vimeo.com/video/156296154?api=1&autoplay=1&loop=1&badge=0title=0&byline=0&portrait=0&background=1"
            frameBorder="0" volume="0" allowFullScreen="1"/>
        </div>
      </div>
      <div className="widgetVideoContent">
        <div className="widgetVideoContent_info">
          <p className="widgetVideoContent_info-highlight">I create a lot of problems and dare myself to solve it.</p>
          <p className="widgetVideoContent_info-title">Beautiful and Powerful</p>
          <p className="widgetVideoContent_info-title">That's Perfection</p>
          <a className="button widgetVideoContent_info-button" href="/perfection">Perfection Web</a>
        </div>
      </div>
    </div>
  );
};

Video.propTypes = {
};

export default Video;
