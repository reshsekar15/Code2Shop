import React, { Component } from 'react';
import ChallengesPage from './components/Challenges';
import TopNav from './components/TopNav';
import SideNav from './components/Sidenav/SideNav';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <SideNav />
        <ChallengesPage />
      </div>
    );
  }
}

export default App;
