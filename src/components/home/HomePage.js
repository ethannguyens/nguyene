import React from 'react';
import {Link} from 'react-router';
import Video from '../video/video';

class HomePage extends React.Component {
  render() {
    return (
      <div className="homeBody">
        <Video />
        <div className="jumbotron">
          <h1>Ethan Nguyen</h1>
          <p>React, Redux and React Router in ES6 for ultra-responsive web apps.</p>
          <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        </div>
      </div>
    );
  }
}

export default HomePage;
