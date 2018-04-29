import React, { Component } from 'react';
import {BrowserRouter as Router } from 'react-router-dom';

import Routes from './routes/index';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes />
        </Router>
      </div>
    );
  }
}

export default App;
