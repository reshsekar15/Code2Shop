import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import SignInForm from '../components/UserManagement/SignInForm';
import SignUpLink from '../components/UserManagement/SignUpLink';
import PasswordForgetLink from '../components/UserManagement/PasswordForgetLink';


const SignInPage = ({ history }) => (
  <div style={{ backgroundColor: '#ededed' }}>
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Segment style={{ width: '600px', marginTop: '-30%' }}>
        <h1>Sign In</h1>
        <SignInForm history={history} />
        <PasswordForgetLink />
        <SignUpLink />
      </Segment>
    </Container>
  </div>);

export default withRouter(SignInPage);
