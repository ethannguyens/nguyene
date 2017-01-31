// This component handles the App template used on every page.
import React, {PropTypes} from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import {menu, footer, term, social} from '../database/database';
import {connect} from 'react-redux';

class App extends React.Component {
  constructor() {
    super();
    this.menu = menu;
    this.footer = footer;
    this.term = term;
    this.social = social;
  }

  render() {
    return (
      <div className="nguyene">
        <Header menu={this.menu}/>
        {this.props.children}
        <Footer footer={this.footer}
                title="Want to get to know me better, email me at "
                subtitle="ethan.nguyens@gmail.com"
                text="2017 Ethan Nguyen. All rights reserved"
                term={this.term}
                social={this.social}
        />
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
