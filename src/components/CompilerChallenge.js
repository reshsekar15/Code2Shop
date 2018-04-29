import React, { Component } from 'react';
import { TextArea, Button } from 'semantic-ui-react';
import ChallengeTopBar from './ChallengeTopBar';

class CompilerChallenge extends Component {
  constructor() {
    super();

    this.state = {
      script: ''
    }
  }

  handleKeyUp = (e) => {
    if (e.keyCode == 9) {
      e.preventDefault();
    }
  }

  render() {
    const { updateText } = this.props;

    return (
      <div className="code-container">
        <TextArea
          rows={45}
          wrap="hard"
          className="code-area"
          onChange={(e, { value }) => updateText(value)}
          onKeyDown={this.handleKeyUp.bind(this)}
        />
      </div>
    )
  }
}

export default CompilerChallenge;