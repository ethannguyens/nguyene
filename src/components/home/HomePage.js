import React from 'react';
import {Link} from 'react-router';
import Video from '../video/video';

class HomePage extends React.Component {
  render() {
    return (
      <div className="homeBody">
        <Video />
      </div>
    );
  }
}

export default HomePage;
