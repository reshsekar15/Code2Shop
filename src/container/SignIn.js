import React, { Component } from 'react';
import { SignInForm } from '../components/UserManagement/SignIn';
import { SignUpLink } from '../components/UserManagement/SignUp';
import { PasswordForgetLink } from '../components/UserManagement/PasswordForget'

const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

export default withRouter(SignInPage);