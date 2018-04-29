import React, { Component } from 'react';
import TopNav from './TopNav';
import SideNav from './Sidenav/SideNav';

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <TopNav />
        {this.props.match.url === '/challenges' && <SideNav />}
        {this.props.children}
      </div>
    );
  }
}

export default App;
