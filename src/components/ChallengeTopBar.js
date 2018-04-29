import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';

class ChallengesTopBar extends Component{

  render() {
    const {handleSubmitCode} = this.props;
    return(
      <Menu className="challenge-topbar">
        <Menu.Item as="a" onClick={handleSubmitCode} >Submit Code</Menu.Item>
        <Menu.Item position="center">
          <Menu.Header>Challenge 1</Menu.Header>
        </Menu.Item>
        <Menu.Menu position="right">
          <Menu.Item as="a" position="right">Previous Challenge</Menu.Item>
          <Menu.Item as="a" position="right">Next Challenge</Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default ChallengesTopBar;