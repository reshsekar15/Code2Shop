import React, { Component } from 'react';
import { TextArea, Button } from 'semantic-ui-react';

class ContactUsPage extends Component {
  constructor() {
    super();

    this.state = {
      script: ''
    }
  }

  render() {
    return (
      <div className="partnership-container set-min-height">
        <h1>Contact Us Page!</h1>
      </div>
    )
  }
}

export default ContactUsPage;