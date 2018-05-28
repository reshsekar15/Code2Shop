import React, { Component } from 'react';
import { Form, Message, Icon } from 'semantic-ui-react';

import { auth } from '../../firebase';

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  passwordOneInvalid: false,
  passwordTwoInvalid: false,
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  }

  handleOnChange(prop, value) {
    switch (prop) {
      case 'passwordOne': {
        const passwordOneInvalid = value === '';
        this.setState({ passwordOne: value, passwordOneInvalid });
      }
        break;
      case 'passwordTwo': {
        const passwordTwoInvalid = value === '' && value !== this.state.passwordOne;
        this.setState({ passwordTwo: value, passwordTwoInvalid });
      }
        break;
      default:
        break;
    }
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      passwordOneInvalid,
      passwordTwoInvalid,
      error,
    } = this.state;

    const isInvalid =
      passwordOneInvalid ||
      passwordTwoInvalid;

    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Input
          label="New Password"
          value={passwordOne}
          onChange={(e, { value }) => this.handleOnChange('passwordOne', value)}
          type="password"
          placeholder="New Password"
        />
        <Form.Input
          label="Confirm New Password"
          value={passwordTwo}
          onChange={(e, { value }) => this.handleOnChange('passwordTwo', value)}
          type="password"
          placeholder="Confirm New Password"
        />
        <Form.Button
          disabled={isInvalid}
          type="submit"
        >
          Reset My Password
        </Form.Button>
        {!!error && (<Message error><Icon name="info circle" />{error.message}</Message>)}
      </Form>
    );
  }
}

export default PasswordChangeForm;
