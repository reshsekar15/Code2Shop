import React from 'react';
import { Container } from 'semantic-ui-react';
import SignUpForm from '../components/UserManagement/SignUpForm';

const SignUpPage = ({ history }) => (
  <div style={{ backgroundColor: '#ededed' }}>
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <SignUpForm history={history} />
    </Container>
  </div>);

export default SignUpPage;
