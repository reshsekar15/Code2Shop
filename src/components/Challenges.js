import React, { Component } from 'react';
import {Container} from 'semantic-ui-react';
import ChallengeTopBar from './ChallengeTopBar';

import DragNDropChallenge from './DragNDropChallenge';
import CompilerChallenge from './CompilerChallenge';

class ChallengesPage extends Component {
  constructor() {
    super();

    this.state = {
      script: '',
      showCompiler: false,
      dustbins: [],
      correctOrder: [
        'Start',
        'Print to screen a message asking for the number',
        'Read the input (x)',
        'Find the remainder using x % 2 (modulus)',
        'Check if the remainder is equal to zero',
        'Print to screen a "The input is even!"',
        'Print to screen a "The input is odd!"',
        'Stop',
      ],
    }
  }

  updateText = (value) => {
    this.setState({ script: value });
  }

  handleSubmitScript() {
    if(this.state.showCompiler){
      const program = {
        script : this.state.script,
        language: "python3",
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
        if(data.output.toLowerCase() === 'number is odd\n'){
          alert('You wrote the correct code!');  
        }
      });
      
      return;
    } 
    alert('You added everything in the correct order!');   
  }

  handleDragNDrop(dustbins){
    console.log(dustbins);
    this.setState({dustbins})
  }

  handleKeyUp = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault();
      console.log(e.currentTarget.value);
      this.setState({ script: e.currentTarget.value + '  '});
    }
  }

  switchChallengeType(){
    this.setState({showCompiler: !this.state.showCompiler});
  }

  render() {
    const {showCompiler} = this.state;
    return (
      <div className="challenges-container set-min-height">
        <ChallengeTopBar 
          handleSubmitCode={this.handleSubmitScript.bind(this)}
          switchChallengeType={this.switchChallengeType.bind(this)}
          showCompiler={showCompiler}
        />
        <Container>
          <h2>Input oddity.</h2>
          <p>
            Write code to check whether an Input is an even or odd number. {showCompiler && <strong>Assume input value is 5</strong>}
          </p>
        </Container>
    {showCompiler ? (
      <CompilerChallenge updateText={this.updateText.bind(this)} />) 
      : (
      <DragNDropChallenge handleDragNDrop={this.handleDragNDrop.bind(this)} />)}        
      </div>
    )
  }
}

export default ChallengesPage;