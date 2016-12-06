// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './header/Header';
import Footer from './common/Footer';
import {connect} from 'react-redux';

const database = require('../database/database');

class App extends React.Component {
  render() {
    return (
      <div className="">
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
