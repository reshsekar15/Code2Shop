import React, { Component } from 'react';
import { TextArea, Button } from 'semantic-ui-react';
import ChallengeTopBar from './ChallengeTopBar';

import DragNDropChallenge from './DragNDropChallenge';

class ChallengesPage extends Component {
  constructor() {
    super();

    this.state = {
      script: ''
    }
  }

  updateText = (value) => {
    this.setState({ script: value });
    console.log(this.state.script);
  }

  handleSubmitScript() {
    const program = {
      script : this.state.script,
      language: "nodejs",
      versionIndex: "0",
      clientId: "93c5da802c7d94b117ce84f5d4933294",
      clientSecret:"b5bb3e871f4f9a569efdef9f4d37511182bbd6df8265b4140b5f5a87e2362b53"
  };
    fetch('https://api.jdoodle.com/execute', {
      method: 'POST',
      body: JSON.stringify(program),
      headers:{
        'content-type': 'application/json'
      }
    }).then(response => {
      return response.json();
    }).then(data => {
      console.table(data);
      alert(JSON.stringify(data))
    });
  }

  handleKeyUp = (e) => {
    if (e.keyCode == 9) {
      e.preventDefault();
      console.log(e.currentTarget.value);
      this.setState({ script: e.currentTarget.value + '  '});
    }
  }

  render() {
    return (
      <div className="challenges-container set-min-height">
        <ChallengeTopBar 
          handleSubmitCode={this.handleSubmitScript.bind(this)}
        />
        <DragNDropChallenge />
      </div>
    )
  }
}

export default ChallengesPage;