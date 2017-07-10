import React from 'react';
import {Link} from 'react-router';
import WidgetBackground from '../widgetBackground/WidgetBackground';
import WidgetImageWithOverlay from '../widgetImageWithOverlay/widgetImageWithOverlay';
import SetOrion from '../setOrion/SetOrion';

class Resume extends React.Component {
  constructor(){
    super();
  }

  render() {
    return (
      <div className="homeBody">
        <WidgetBackground class="widgetBackground-mainVideo"
                          canvas={false}
                          image="https://static1.squarespace.com/static/5300d507e4b0fa8137bdc65d/t/57504f474c2f85c0e9462d36/1464880969849/devon-stank-squarespace-developer-header-01.jpg?format=2500w"
                          highlight="Have a look to what is in me"
                          title="Software Engineer"
                          buttonText="Download Resume"
                          buttonLink="https://github.com/ethannguyens/nguyene/blob/master/src/Ethan_Nguyen_CV.pdf"
        />
      </div>
    );
  }
}

export default Resume;
