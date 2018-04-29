import React, { Component } from 'react';
import { TextArea, Button } from 'semantic-ui-react';

class AboutUsPage extends Component {
  constructor() {
    super();

    this.state = {
      script: ''
    }
  }

  render() {
    return (
      <div className="partnership-container set-min-height">
        <h1>About Us Page!</h1>
      </div>
    )
  }
}

export default AboutUsPage;