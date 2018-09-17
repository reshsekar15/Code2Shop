import React from 'react';
import { connect } from 'react-redux';
import TopNav from './TopNav';

const Layout = ({ userInfo, children }) => (
  <div className="App">
    <TopNav userInfo={userInfo} />
    <div className="main-content">
      {children}
    </div>
  </div>
);

export default connect(
  state => state.app,
  null
)(Layout);
