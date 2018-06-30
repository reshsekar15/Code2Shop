import React, { Component } from 'react';
import { Segment, Form, Message, Icon } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../store/actions/app_Actions';
import statusActions from '../../store/actions/status_Actions';

import { auth, firebase } from '../../firebase';


const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
  usernameInvalid: false,
  emailInvalid: false,
  passwordOneInvalid: false,
  passwordTwoInvalid: false
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ...INITIAL_STATE
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(event) {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
      createUser,
      sendError,
    } = this.props;

    try {
      const authUser = await auth.doCreateUserWithEmailAndPassword(email, passwordOne);

      const user = {
        username,
        emailaddress: email,
        userguid: authUser.user.uid,
        fk_usertype: 1,
      };

      await createUser(user);

      firebase.auth.onAuthStateChanged(async (newUser) => {
        await newUser.sendEmailVerification();
        this.setState({ ...INITIAL_STATE });
        history.push('/challenges');
      });
    } catch (error) {
      this.setState({ error }, () => {
        sendError(error, null);
      });
    }

    event.preventDefault();
  }

  handleOnChange(prop, value) {
    switch (prop) {
      case 'username': {
        const usernameInvalid = value === '';
        this.setState({ username: value, usernameInvalid });
      }
        break;
      case 'email': {
        const emailInvalid = value.indexOf('@') === -1 || value === '';
        this.setState({ email: value, emailInvalid });
      }
        break;
      case 'passwordOne': {
        const passwordOneInvalid = value === '';
        this.setState({ passwordOne: value, passwordOneInvalid });
      }
        break;
      case 'passwordTwo': {
        const passwordTwoInvalid = value === '';
        this.setState({ passwordTwo: value, passwordTwoInvalid });
      }
        break;
      default:
        break;
    }
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
      usernameInvalid,
      emailInvalid,
      passwordOneInvalid,
      passwordTwoInvalid
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '' ||
      email.indexOf('@') === -1;

    return (
      <Segment padded style={{ width: '600px', marginTop: '-30%' }}>
        <h1>Sign Up</h1>
        <Form onSubmit={this.onSubmit}>
          <Form.Input
            fluid
            label="User name"
            placeholder="username"
            error={usernameInvalid}
            onChange={(e, { value }) => this.handleOnChange('username', value)}
          />
          <Form.Input
            fluid
            label="Email"
            placeholder="Email Address"
            error={emailInvalid}
            onChange={(e, { value }) => this.handleOnChange('email', value)}
          />
          <Form.Input
            fluid
            type="password"
            label="Password"
            placeholder="Password"
            error={passwordOneInvalid}
            onChange={(e, { value }) => this.handleOnChange('passwordOne', value)}
          />
          <Form.Input
            fluid
            type="password"
            label="Confirm Password"
            placeholder="Confirm Password"
            error={passwordTwoInvalid}
            onChange={(e, { value }) => this.handleOnChange('passwordTwo', value)}
          />
          <Form.Button
            fluid
            primary
            disabled={isInvalid}
          >
            Sign Up
          </Form.Button>
        </Form>
        {!!error && (<Message error><Icon name="info circle" />{error.message}</Message>)}
      </Segment>
    );
  }
}

export default compose(
  withRouter,
  connect(
    null,
    dispatch => bindActionCreators({ ...actionCreators, ...statusActions }, dispatch)
  )
)(SignUpForm);
