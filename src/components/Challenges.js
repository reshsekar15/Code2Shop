import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import ChallengeTopBar from './ChallengeTopBar';

import DragNDropChallenge from './DragNDropChallenge';
import CompilerChallenge from './CompilerChallenge';

class ChallengesPage extends Component {
  constructor() {
    super();

    this.state = {
      script: '',
      showCompiler: false,
      // eslint-disable-next-line
      dustbins: [],
    };

    this.handleSubmitScript = this.handleSubmitScript.bind(this);
    this.switchChallengeType = this.switchChallengeType.bind(this);
    this.updateText = this.updateText.bind(this);
    this.handleDragNDrop = this.handleDragNDrop.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  updateText = (value) => {
    this.setState({ script: value });
  }

  handleDragNDrop(dustbins) {
    // eslint-disable-next-line
    this.setState({ dustbins });
  }

  handleSubmitScript() {
    if (this.state.showCompiler) {
      const program = {
        script: this.state.script,
        language: 'python3',
        versionIndex: '0',
        clientId: '93c5da802c7d94b117ce84f5d4933294',
        clientSecret: 'b5bb3e871f4f9a569efdef9f4d37511182bbd6df8265b4140b5f5a87e2362b53'
      };
      // eslint-disable-next-line
      fetch('https://api.jdoodle.com/execute', {
        method: 'POST',
        body: JSON.stringify(program),
        headers: {
          'content-type': 'application/json'
        }
      })
        .then(response => response.json())
        .then((data) => {
          console.table(data);
          if (data.output.toLowerCase() === 'number is odd\n') {
            // eslint-disable-next-line
            alert('You wrote the correct code!');
          }
        });

      return;
    }
    // eslint-disable-next-line
    alert('You added everything in the correct order!');
  }

  handleKeyUp = (e, { value }) => {
    if (e.keyCode === 9) {
      e.preventDefault();
      this.setState({ script: `${value}\t` });
    }
  }

  switchChallengeType() {
    this.setState({ showCompiler: !this.state.showCompiler });
  }

  render() {
    const { showCompiler } = this.state;
    return (
      <div>
        <ChallengeTopBar
          handleSubmitCode={this.handleSubmitScript}
          switchChallengeType={this.switchChallengeType}
          showCompiler={showCompiler}
        />
        <Container>
          <h2>Input oddity.</h2>
          <p>
            Write code to check whether an Input is an even or odd number.
            {showCompiler && <strong>Assume input value is 5</strong>}
          </p>
        </Container>
        {showCompiler ? (
          <CompilerChallenge updateText={this.updateText} handleKeyUp={this.handleKeyUp} />)
          : (
            <DragNDropChallenge handleDragNDrop={this.handleDragNDrop} />)}
      </div>
    );
  }
}

export default ChallengesPage;
