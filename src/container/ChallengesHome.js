import React, { Component } from 'react';
import { Header, Label, Icon, Segment, Container, Grid } from 'semantic-ui-react';
import ChallengeListItem from '../components/ChallengesHome/ChallengeListItem';
const challengesData={
  levelOne: [{
  key:0,
  challengesLink:'/challenges/123',
  levelColor:"red",
  levelName:"Level 1",
  challangeText:"Challenge 1",
  isComplete: true,
 },
 {
  key:1,
  challengesLink:'/challenges/1234',
  levelColor:"red",
  levelName:"Level 1",
  challangeText:"Challenge 2",
  isComplete: false,
 }],
 levelTwo:[
  {
    key:0,
    challengesLink:'/challenges/123',
    levelColor:"blue",
    levelName:"Level 2",
    challangeText:"Challenge 1",
    isComplete: false,
   },
   {
    key:1,
    challengesLink:'/challenges/1234',
    levelColor:"blue",
    levelName:"Level 2",
    challangeText:"Challenge 2",
    isComplete: false,
   }
 ]
}
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
              {
                challengesData.levelOne.map(data1=>(
                  <ChallengeListItem 
                  challengesLink={data1.challengesLink} 
                  levelColor={data1.levelColor}
                  levelName={data1.levelName}
                  challangeText={data1.challangeText}
                  isComplete={data1.isComplete}
                  />
                ))
              }
             

              
            </Segment.Group>
            <Header as="h2">Level 2</Header>
            <Segment.Group>
            {
                challengesData.levelTwo.map(data1=>(
                  <ChallengeListItem 
                  challengesLink={data1.challengesLink} 
                  levelColor={data1.levelColor}
                  levelName={data1.levelName}
                  challangeText={data1.challangeText}
                  />
                ))
              } 
            </Segment.Group>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default ChallengesHomePage;
