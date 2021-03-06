import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App.jsx';
import HomePage from './components/home/HomePage.jsx';
import Portfolio from './components/portfolio/Portfolio.jsx';
import Resume from './components/resume/Resume.jsx';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="portfolio" component={Portfolio} />
    <Route path="resume" component={Resume} />
  </Route>
);
