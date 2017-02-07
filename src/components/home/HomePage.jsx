import React from 'react';
import {Link} from 'react-router';
import WidgetBackground from '../widgetBackground/WidgetBackground';
import WidgetImageWithOverlay from '../widgetImageWithOverlay/widgetImageWithOverlay';
import SetOrion from '../setOrion/SetOrion';
import Instagram from '../instagram/Instagram';

class HomePage extends React.Component {
  constructor(){
    super();
    this.project1 = <WidgetImageWithOverlay class="projects"
                                            img="https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/584598f9d1758ec839a47e61/1480956179546/Squarespace+Portfolio+DJ+Jason+Klock?format=750w"
                                            highlight="My Website"
                                            title="Ethan Nguyen"
                                            button="View Project"
                                            link="/porfolio"
    />;

    this.projects = [this.project1, this.project1, this.project1];
  }

  render() {
    return (
      <div className="homeBody">
        <WidgetBackground class="widgetBackground-mainVideo"
                          canvas={true}
                          image="https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/57504f474c2f85c0e9462d36/1464880969849/devon-stank-squarespace-developer-header-01.jpg?format=2500w"
                          highlight="I create problems. I seek answers. I take actions. I am a developer"
                          title="Beautiful & Powerful Building the Webapp"
                          buttonText="Perfection"
                          buttonLink="#"
        />
        <WidgetBackground class="widgetBackground-intro"
                          title="Ethan Nguyen"
                          text="Graduating from the University of Bristol with a MSc in Advanced Computing, I currently working as a Software Developer at one of the UK biggest e-commerce group. I enjoy working with JavaScript both front-end and back-end. I’d like to adapt latest technologies, tools and frameworks such as React, Redux, ES.Next and WebPack to build the prefect web. With my strong academic background and years of experience, I am no doubt that you will be benefit hugely from having me as part of your up coming projects."
        />
        <WidgetBackground class="widgetBackground-passion"
                          title="I'm a perfectionist"
                          text="I truly love coding and refactoring. I can spend days to refactoring my code over and over again until it reaches its perfect state. Honestly, that inspire me going to work everyday – to perfect things."
                          mediaYoutubeId="xZPG0i3omlE"
                          buttonText="More About Me"
                          buttonLink="#"
        />
        <SetOrion class="prjects"
                  title="My Latest Projects"
                  widgets={this.projects}
                  button="view more projects"
                  link="/porfolio"
        />
      </div>
    );
  }
}

export default HomePage;
