import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from '../routes';
import './normalize.css';

export default class App extends Component {
  render() {
    return (
        <Router>
          {renderRoutes(routes)}
        </Router>
    );
  }
}
