// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import {connect} from 'react-redux';

const database = require('../database/database');

class App extends React.Component {
  constructor() {
    this.menu = [{
      id: 'home',
      link: '/home',
      text: 'Home'
    }];
  }

  render() {
    return (
      <div className="">
        <Header menu=`${this.menu}`/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
