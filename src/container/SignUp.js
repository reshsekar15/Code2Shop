import React, { Component } from 'react';
import { Segment, Form, Grid, Message, Icon } from 'semantic-ui-react';
import { withRouter, } from 'react-router-dom';

import { auth, db } from '../firebase';

const SignUpPage = ({ history }) =>
  <div className="container signup-page">
    <SignUpForm history={history} />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

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
}

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      ...INITIAL_STATE
    };
  }

  handleOnChange(prop, value){
    switch(prop){
      case 'username':
        const usernameInvalid = value === '';
        this.setState({username: value, usernameInvalid});
        break;
      case 'email':
        const emailInvalid = value.indexOf('@') === -1 || value === '';
        this.setState({email:value, emailInvalid});
        break;
      case 'passwordOne':
        const passwordOneInvalid = value === '';
        this.setState({passwordOne: value, passwordOneInvalid});
        break;
      case 'passwordTwo':
        const passwordTwoInvalid = value === '';
        this.setState({passwordTwo: value, passwordTwoInvalid});
        break;
      default:
        break;
    }
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        // Create a user in your own accessible Firebase Database too
        console.log(authUser);
        db.users.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push('/challenges');
            window.location.href = '/challenges';
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
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

      console.log(error);

      return (
        <Grid centered>
          <Grid.Column 
            width={6}
            className="sign-up-container"
          >
            <Segment>
              <Form onSubmit={this.onSubmit}>
                <Form.Input 
                  fluid 
                  label="User name" 
                  placeholder="username" 
                  error={usernameInvalid}
                  onChange={(e, {value}) => this.handleOnChange('username', value)}
                />
                <Form.Input 
                  fluid 
                  label="Email" 
                  placeholder="Email Address" 
                  error={emailInvalid}
                  onChange={(e, {value}) => this.handleOnChange('email', value)}
                />
                <Form.Input 
                  fluid 
                  type="password"
                  label="Password" 
                  placeholder="Password" 
                  error={passwordOneInvalid}
                  onChange={(e, {value}) => this.handleOnChange('passwordOne', value)}
                />
                <Form.Input 
                  fluid 
                  type="password"
                  label="Confirm Password" 
                  placeholder="Confirm Password" 
                  error={passwordTwoInvalid}
                  onChange={(e, {value}) => this.handleOnChange('passwordTwo', value)}
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
          </Grid.Column>
        </Grid>
      )

    return (
      <form className="add-timer-form signup-form" >
        <span className="form-title center">Sign Up</span>
        <div className="md-input-field">
          <input
            value={username}
            onChange={event => this.setState(byPropKey('username', event.target.value))}
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div className="md-input-field">
          <input
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Email Address"
          />
        </div>
        <div className="md-input-field">
          <input
            type="password"
            value={passwordOne}
            placeholder="Password"
            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
          />
        </div>
        <div className="md-input-field">
          <input
            type="password"
            value={passwordTwo}
            placeholder="Confirm Password"
            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
          />
        </div>
        <button className="btn-timescape" disabled={isInvalid} type="submit">
          Sign Up
			</button>

        
      </form>
    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <a href='/signup'>Sign Up</a>
  </p>
export default withRouter(SignUpPage);
export {
  SignUpForm,
  SignUpLink,
};