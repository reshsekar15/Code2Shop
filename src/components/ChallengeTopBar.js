import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class ChallengesTopBar extends Component{

  render() {
    const {handleSubmitCode, switchChallengeType, showCompiler} = this.props;
    return(
      <Menu className="challenge-topbar">
        <Menu.Item as="a" onClick={handleSubmitCode} >Submit Code</Menu.Item>
        <Menu.Item as="a" onClick={switchChallengeType} >{showCompiler ? 'Switch to DragNDrop' : 'Switch to Compiler' }</Menu.Item>
        <Menu.Item position="center">
          <Menu.Header>Input Oddity</Menu.Header>
        </Menu.Item>
      </Menu>
    )
  }
}

export default ChallengesTopBar;