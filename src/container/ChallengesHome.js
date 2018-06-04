import React, { Component } from 'react';
import { Header, Label, Icon, Segment, Container, Grid } from 'semantic-ui-react';
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
        <Grid padded>
          <Grid.Column>
            <Header as="h1"> Challenges </Header>
            <Header as="h2">Level 1</Header>
            <Segment.Group>
              <Segment>
                <a href="/challenges/1234" className="challenges-content">
                  <Label as="a" color="red" ribbon>
                    Level 1
                  </Label>
                  <span className="challenges-name">Challenge 1</span>
                  <Icon className="challenges-icon" name="trophy" size="large" />
                </a>
              </Segment>
              <Segment>
                <div className="challenges-content">
                  <Label as="a" color="red" ribbon>
                    Level 1
                  </Label>
                  <span className="challenges-name">Challenge 2</span>
                  <Icon style={{ float: 'right' }} name="trophy" size="large" />
                </div>
              </Segment>
              <Segment>
                <div className="challenges-content">
                  <Label as="a" color="red" ribbon>
                    Level 1
                  </Label>
                  <span className="challenges-name">Challenge 3</span>
                  <Icon style={{ float: 'right' }} name="trophy" size="large" />
                </div>
              </Segment>
            </Segment.Group>
            <Header as="h2">Level 2</Header>
            <Segment.Group>
              <Segment>
                <div className="challenges-content">
                  <Label as="a" color="blue" ribbon>
                    Level 2
                  </Label>
                  <span className="challenges-name">Challenge 1</span>
                  <Icon style={{ float: 'right' }} name="trophy" size="large" />
                </div>
              </Segment>
              <Segment>
                <div className="challenges-content">
                  <Label as="a" color="blue" ribbon>
                    Level 2
                  </Label>
                  <span className="challenges-name">Challenge 2</span>
                  <Icon style={{ float: 'right' }} name="trophy" size="large" />
                </div>
              </Segment>
              <Segment>
                <a href="/challenges/1234" className="challenges-content">
                  <Label as="a" color="blue" ribbon>
                    Level 2
                  </Label>
                  <span className="challenges-name">Challenge 3</span>
                  <Icon className="challenges-icon" name="trophy" size="large" />
                </a>
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default ChallengesHomePage;
