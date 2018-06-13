import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import VariableCard from '../components/ChallengePage/CardTypes/VariableCard';
import LoopCard from '../components/ChallengePage/CardTypes/LoopCard';
import ConditionalCard from '../components/ChallengePage/CardTypes/ConditionalCard';

class ChallengePage extends Component {
  state = {}
  render() {
    return (
      <Container style={{ paddingTop: '60px' }}>
        <Grid>
          <VariableCard />
          <LoopCard />
          <ConditionalCard />
        </Grid>
      </Container>
    );
  }
}

export default ChallengePage;
