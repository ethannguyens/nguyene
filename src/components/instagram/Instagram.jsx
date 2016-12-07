import React, {PropTypes} from 'react';
import Profile from '../../database/profile'

// require('./instagram.scss');

class instagram extends React.Component {
  constructor(props) {
    super(props);
    console.log(Profile.instagram.clientId);
    //this.intagram = this.createInstagram(Profile.instagram.clientId, Profile.instagram.clientSecret);
    //this.getInstagramRecent = this.getInstagramRecent().bind(this);
  }

  /*createInstagram(clientId, clientSecret) {
    return new Instagram({
      clientId: clientId,
      accessToken: clientSecret
    })
  }*/

  /*getInstagramRecent() {
    this.intagram.get('users/self/media/recent').then((data) => {
      console.log(data);
    });
  }*/

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
