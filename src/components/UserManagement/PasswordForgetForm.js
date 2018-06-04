import React, { Component } from 'react';
import { Form, Message, Icon } from 'semantic-ui-react';

import { auth } from '../../firebase';

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    auth.doPasswordReset(email)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  handleOnChange(prop, value) {
    this.setState({ [prop]: value });
  }

  render() {
    const {
      email,
      error,
    } = this.state;

    const isInvalid = email === '';

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Input
          label="Confirm Email"
          value={email}
          onChange={(e, { value }) => this.handleOnChange('email', value)}
          type="text"
          placeholder="Email Address"
        />
        <Form.Button disabled={isInvalid} type="submit">
          Send Email to Reset
        </Form.Button>
        {!!error && (<Message error><Icon name="info circle" />{error.message}</Message>)}
      </Form>
    );
  }
}

export default PasswordForgetForm;