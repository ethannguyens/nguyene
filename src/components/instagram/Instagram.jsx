import React, {PropTypes} from 'react';
import Profile from '../../database/profile';
const ig = require('instagram-node').instagram();

// require('./instagram.scss');

class instagram extends React.Component {
  constructor() {
    super();
    ig.use({ access_token: Profile.instagram.accessToken });
    ig.use({ client_id: Profile.instagram.clientId,
      client_secret: Profile.instagram.clientSecret });
    ig.user_media_recent('user_id',(err, medias, pagination, remaining, limit) => {
      console.log(err);
      console.log(medias);
      console.log(pagination);
      console.log(remaining);
      console.log(limit);
    });

  }

  render(){
    return (
      <div className={this.props.class ? `instagram ${this.props.class}` : `instagram`}>
        <div className="instagramContent">
          {this.props.highlight ? <div className="instagram_highlight">{this.props.highlight}</div> : undefined}
          {this.props.title ? <div className="instagram_title">{this.props.title}</div> : undefined}
          {this.props.subtitle ? <div className="instagram_subtitle">{this.props.subtitle}</div> : undefined}
          {this.props.text ? <div className="instagram_text">T{this.props.text} </div> : undefined}
          {this.props.buttonText? <a className="instagram_button" href={this.props.buttonLink}>{this.props.buttonText}</a> : undefined}
        </div>
      </div>
    );
  }
}

instagram.propTypes = {
  class: PropTypes.string,
  highlight: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string
};

export default instagram;
