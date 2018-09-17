import React from 'react';
import { Grid, Container, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../store/actions/challenge_Actions';
import ChallengeStep from '../components/ChallengePage/ChallengeStep';
import ChallengeCardModal from '../components/ChallengePage/ChallengeCardModal';
import withAuthorization from '../AAA/withAuthorization';

const ChallengePage = (props) => {
  const { showChallengeCardModal, variableList } = props;

  const rootComponents = variableList.filter(v => v.parentGuid === null);
  return (
    <Container>
      <Grid stackable>
        {rootComponents.map((step, index) => (
          <ChallengeStep
            key={step.cardGuid}
            variableList={variableList}
            cardData={step}
            index={index}
          />
        ))}
        <Grid.Row>
          <Grid.Column floated="right" width={14}>
            <Button
              fluid
              size="massive"
              onClick={() => showChallengeCardModal(null)}
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

const mapStateToProps = state => state.challenge;

const mapDispatchToProps = dispatch => bindActionCreators({
  ...actionCreators
}, dispatch);

const authCondition = authUser => !!authUser;

export default compose(
  withAuthorization(authCondition),
  connect(mapStateToProps, mapDispatchToProps)
)(ChallengePage);
