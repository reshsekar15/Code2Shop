import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'recompose';

import { firebase } from '../Firebase';

const withAuthorization = authCondition => (Component) => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      firebase.auth.onAuthStateChanged((authUser) => {
        if (!authCondition(authUser)) {
          this.props.history.push('/signup');
          // eslint-disable-next-line
          window.location.href = '/signup';
        }
      });
    }

    render() {
      return this.props.authUser ? <Component /> : null;
    }
  }

  const mapStateToProps = state => ({
    authUser: state.sessionState.authUser,
  });

  return compose(
    withRouter,
    connect(mapStateToProps),
  )(WithAuthorization);
};

export default withAuthorization;
