import React, { Component } from 'react';
import { Grid, Container, Header, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../store/actions/challenge_Actions';
import CardWrapper from '../components/ChallengePage/CardTypes/CardWrapper';
import ChallengeCardModal from '../components/ChallengePage/ChallengeCardModal';


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

class ChallengePage extends Component {

  render() {
    const { showChallengeCardModal } = this.props;
    return (
      <Container>
        <Grid stackable>
          <Grid.Row>
            <Grid.Column width={1}>
              <Header as="h2">Step 1:</Header>
            </Grid.Column>
            <Grid.Column width={15}>
              <CardWrapper cardType="variable" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
              <Header as="h2">Step 2:</Header>
            </Grid.Column>
            <Grid.Column width={15}>
              <CardWrapper cardType="modifier" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={1}>
              <Header as="h2">Step 3:</Header>
            </Grid.Column>
            <Grid.Column width={15}>
              <CardWrapper cardType="loop" />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column floated="right" width={15}>
              <Button
                fluid
                size="massive"
                onClick={() => showChallengeCardModal()}
              >
                <Icon name="add" />
                Add Component
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <ChallengeCardModal
                {...this.props}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
};


export default connect(
  state => ({ ...state.challenge }),
  dispatch => bindActionCreators({ ...actionCreators }, dispatch)
)(ChallengePage);
