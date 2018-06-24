import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { firebase } from '../firebase';

const withAuthorization = authCondition => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      console.log(this.props.authUser, authCondition);
      if (!this.props.authUser) {
        this.props.history.replace('/signin');
      }
      firebase.auth.onAuthStateChanged((authUser) => {
        if (!authCondition(authUser)) {
          console.log(this.props.authUser, authCondition);
          this.props.history.replace('/signup');
        }
      });
    }

    render() {
      return this.props.authUser ? <Component /> : null;
    }
  }

  const mapStateToProps = state => ({
    authUser: state.app.userInfo,
  });

  return compose(
    withRouter,
    connect(mapStateToProps),
  )(WithAuthorization);
};

export default withAuthorization;
