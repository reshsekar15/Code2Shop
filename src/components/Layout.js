import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import TopNav from './TopNav';
import SideNav from './Sidenav/SideNav';
import Loading from './Loading';

class App extends PureComponent {
  render() {
    const { match, userInfo } = this.props;
    const showSideNav = match.url === '/challenges';

    if (!userInfo) {
      return <Loading />;
    }

    return (
      <div className="App">
        <TopNav />
        {showSideNav && <SideNav userInfo={userInfo} />}
        <div className={showSideNav ? 'challenges-container with-sidenav set-min-height' : 'challenges-container set-min-height'}>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default connect(
  state => state.app,
  null
)(App);
