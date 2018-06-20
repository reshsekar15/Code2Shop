import React from 'react';
import { Grid, Container, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../store/actions/challenge_Actions';
import ChallengeStep from '../components/ChallengePage/ChallengeStep';
import ChallengeCardModal from '../components/ChallengePage/ChallengeCardModal';

const ChallengePage = (props) => {
  const { showChallengeCardModal, challengeRenderStructure } = props;

  return (
    <Container>
      <Grid stackable>
        {challengeRenderStructure.children.map((step, index) => (
          <ChallengeStep
            key={step.guid}
            cardType={step.type}
            guid={step.guid}
            index={index}
            cardChildren={step.children}
          />
        ))}
        <Grid.Row>
          <Grid.Column floated="right" width={14}>
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
              {...props}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default connect(
  state => state.challenge,
  dispatch => bindActionCreators({ ...actionCreators }, dispatch)
)(ChallengePage);
