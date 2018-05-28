import React from 'react';
import { Segment, Container } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import PasswordForgetForm from '../components/UserManagement/PasswordForgetForm';

const PasswordForgetPage = ({ history }) => (
  <div style={{ backgroundColor: '#ededed' }}>
    <Container
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
      }}
    >
      <Segment padded style={{ width: '600px', marginTop: '-600px' }}>
        <h1>Password Forget</h1>
        <PasswordForgetForm history={history} />
      </Segment>
    </Container>
  </div>
);

export default withRouter(PasswordForgetPage);
