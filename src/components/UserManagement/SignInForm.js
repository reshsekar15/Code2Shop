import React, { Component } from 'react';
import { Form, Message, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../store/actions/app_Actions';
import statusActions from '../../store/actions/status_Actions';

import { auth } from '../../firebase';

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit() {
    console.log(this.state);
    const {
      email,
      password,
    } = this.state;

    const {
      history,
      initApp,
      sendError,
    } = this.props;

    try {
      console.log(this.state);
      await auth.doSignInWithEmailAndPassword(email, password);

      initApp();

      this.setState({ ...INITIAL_STATE });
      history.push('/challenges');
    } catch (error) {
      this.setState(byPropKey('error', error));
      sendError(error, null);
    }
  }

  handleOnChange(prop, value) {
    this.setState({ [prop]: value });
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Input
          value={email}
          label="Email Address"
          onChange={(e, { value }) => this.handleOnChange('email', value)}
          type="text"
          placeholder="Email Address"
        />
        <Form.Input
          value={password}
          label="Password"
          onChange={(e, { value }) => this.handleOnChange('password', value)}
          type="password"
          placeholder="Password"
        />
        <Form.Button primary fluid disabled={isInvalid} type="submit">
          Sign In
        </Form.Button>
        {!!error && (<Message error><Icon name="info circle" />{error.message}</Message>)}
      </Form>
    );
  }
}

export default compose(
  withRouter,
  connect(
    null,
    dispatch => bindActionCreators({ ...actionCreators, ...statusActions }, dispatch)
  )
)(SignInForm);
