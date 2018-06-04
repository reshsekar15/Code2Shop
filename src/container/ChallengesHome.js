import React, { Component, Fragment } from 'react';
import { Header, Label, Icon, List, Container } from 'semantic-ui-react';
// import ChallengesList from '../components/ChallengesHome/ChallengesList';

class ChallengesHomePage extends Component {
  constructor() {
    super();

    this.state = {

    };
  }
  render() {
    return (
      <Container text>
        <Header> Challenges </Header> 
        <List>
          <List.Item>
          <Label as="a" color="red" ribbon>
              Level 1
          </Label>
          <List.Content>
            <span> challange 1 </span>
          </List.Content>
          <Icon name="trophy" corner/>
          </List.Item>
        </List>   
      </Container>
    );
  }
}

export default ChallengesHomePage;
