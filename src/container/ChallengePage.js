import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import ChallengeCard from '../components/ChallengePage/ChallengeCard';

class ChallengePage extends Component {
  state = {}
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Column>
            <ChallengeCard />
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

export default ChallengePage;
