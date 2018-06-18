import React from 'react';
import { Grid, Container, Header } from 'semantic-ui-react';
import VariableCard from '../components/ChallengePage/CardTypes/VariableCard';
import LoopCard from '../components/ChallengePage/CardTypes/LoopCard';
import ModifierCard from '../components/ChallengePage/CardTypes/ModifierCard';

// const fakeData = [{
//   cardType: 'variable',
//   cardGuid: '2r209h3rgjnsdf-gsubn3adsfa',
//   variableName: 'variable 1',
//   variableValue: '0'
// }, {
//   cardType: 'conditional',
//   cardGuid: '1239re8hjvsdvs-023rijbasdv2',
//   conditionalObject: [{
//     conditions: [{
//       conditionType: 'If',
//       variableName: 'variable 1',
//       variableTruthOperator: 'equal',
//       variableTruthValue: '100'
//     }],
//     actions: [{
//       cardType: 'variable',
//       cardGuid: '2r209fhbwnsdf-gsubn3adsfa',
//       variableName: 'variable 2',
//       variableValue: '0'
//     }, {
//       cardType: 'variable',
//       cardGuid: '2r209fhbwnsdf-gsubn3adsfa',
//       variableName: 'variable 2',
//       variableValue: '0'
//     }]
//   }]
// }];

const ChallengePage = () => (
  <Container>
    <Grid stackable>
      <Grid.Row>
        <Grid.Column width={1}>
          <Header as="h2">Step 1:</Header>
        </Grid.Column>
        <Grid.Column width={15}>
          <VariableCard />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={1}>
          <Header as="h2">Step 2:</Header>
        </Grid.Column>
        <Grid.Column width={15}>
          <ModifierCard />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column width={1}>
          <Header as="h2">Step 3:</Header>
        </Grid.Column>
        <Grid.Column width={15}>
          <LoopCard />
        </Grid.Column>
      </Grid.Row>
      {/* <Grid.Row>
        <Grid.Column width={2}>
          <Header as="h2">Step 4:</Header>
        </Grid.Column>
        <Grid.Column width={14}>
          <ConditionalCard />
        </Grid.Column>
      </Grid.Row> */}
    </Grid>
  </Container>
);

export default ChallengePage;
