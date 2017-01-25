import React from 'react';
import {Link} from 'react-router';
import WidgetBackground from '../widgetBackground/WidgetBackground';
import SetOrion from '../setOrion/SetOrion';
import Instagram from '../instagram/Instagram';

class HomePage extends React.Component {
  constructor(){
    super();
    this.widget1 = (<WidgetBackground class="widgetBackground-passion"
                                      title="Understanding my passion"
                                      text="There's something to be said about working with passionate business owners that truly love what they do. I’m no different. I started my business because I honestly enjoy coming to work every day to create something beautiful that has the ability to impact others."
                                      mediaVimeoId="156296154"
                                      buttonText="More About Me"
                                      buttonLink="#"

      />
    );
    this.widget2 = (<WidgetBackground class="widgetBackground-passion"
                                      title="Understanding my passion"
                                      text="There's something to be said about working with passionate business owners that truly love what they do. I’m no different. I started my business because I honestly enjoy coming to work every day to create something beautiful that has the ability to impact others."
                                      mediaVimeoId="156296154"
                                      buttonText="More About Me"
                                      buttonLink="#"

      />
    );
  }
  render() {
    return (
      <div className="homeBody">
        <WidgetBackground class="widgetBackground-mainVideo"
                          vimeoId="156296154"
                          image="https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/57504f474c2f85c0e9462d36/1464880969849/devon-stank-squarespace-developer-header-01.jpg?format=2500w"
                          highlight="I create problems. I seek answers. I take actions. I am a doer"
                          title="Beautiful & Powerful Building the Webapp"
                          buttonText="Perfection"
                          buttonLink="#"
        />
        <WidgetBackground class="widgetBackground-intro"
                          title="Ethan Nguyen"
                          text="Graduating from the University of Bristol with a MSc in Advanced Computing, I currently working as a Software Developer at one of the UK biggest e-commerce group. I enjoy working with JavaScript both front-end and back-end. I’d like to adapt latest technologies, tools and frameworks such as React, Redux, ES.Next and WebPack to build the prefect web. With my strong academic background and years of experience, I am no doubt that you will be benefit hugely from having me as part of your up coming projects."
        />
        <WidgetBackground class="widgetBackground-passion"
                          title="Understanding my passion"
                          text="There's something to be said about working with passionate business owners that truly love what they do. I’m no different. I started my business because I honestly enjoy coming to work every day to create something beautiful that has the ability to impact others."
                          mediaVimeoId="156296154"
                          buttonText="More About Me"
                          buttonLink="#"
        />
        <Instagram />
      </div>
    );
  }
}

export default HomePage;
