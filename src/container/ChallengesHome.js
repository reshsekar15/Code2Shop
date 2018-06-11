import React, { Component, Fragment } from 'react';
import { Header, Segment, Container, Grid } from 'semantic-ui-react';
import ChallengeListItem from '../components/ChallengesHome/ChallengeListItem';

const challengesData = [
  {
    name: 'Level One',
    challenges: [{
      key: 0,
      challengesLink: '/challenges/123',
      levelColor: 'red',
      levelName: 'Level 1',
      challangeText: 'Challenge 1',
      isComplete: true,
    },
    {
      key: 1,
      challengesLink: '/challenges/1234',
      levelColor: 'red',
      levelName: 'Level 1',
      challangeText: 'Challenge 2',
      isComplete: false,
    }]
  },
  {
    name: 'Level Two',
    challenges: [
      {
        key: 0,
        challengesLink: '/challenges/123',
        levelColor: 'blue',
        levelName: 'Level 2',
        challangeText: 'Challenge 1',
        isComplete: false,
      },
      {
        key: 1,
        challengesLink: '/challenges/1234',
        levelColor: 'blue',
        levelName: 'Level 2',
        challangeText: 'Challenge 2',
        isComplete: false,
      }
    ]
  }];

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
            {challengesData.map(level => (
              <Fragment>
                <Header as="h2">{level.name}</Header>
                <Segment.Group>
                  {
                    level.challenges.map(data1 => (
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
              </Fragment>
            ))}
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default ChallengesHomePage;
