import React from 'react';
import { Modal, Grid, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '../../store/actions/challenge_Actions';

import VariableCard from '../../images/ChallengeCards/VariableCard.PNG';
import ModifierCard from '../../images/ChallengeCards/ModifierCard.PNG';
import ConditionalCard from './CardTypes/ConditionalCard';
import LoopCard from '../../images/ChallengeCards/LoopCard.PNG';

import VariableSchema from './CardTypes/Schema/Variable';
import ModifierSchema from './CardTypes/Schema/Modifier';
import ConditionalSchema from './CardTypes/Schema/Conditional';
import LoopSchema from './CardTypes/Schema/Loop';

const ChallengeCardModal = (props) => {
  const {
    showCardSelectMenu,
    closeChallengeCardModal,
    addChallengeCard
  } = props;

  return (
    <Modal
      size="large"
      open={showCardSelectMenu}
      onClose={() => closeChallengeCardModal()}
      closeIcon
      style={{ marginTop: '0' }}
    >
      <Modal.Header>Select a Component</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Grid>
            <Grid.Column width={16}>
              <Image
                src={VariableCard}
                onClick={() => addChallengeCard(VariableSchema())}
              />
            </Grid.Column>
            <Grid.Column width={16}>
              <Image
                src={ModifierCard}
                onClick={() => addChallengeCard(ModifierSchema())}
              />
            </Grid.Column>
            <Grid.Column width={16}>
              <Image
                src={ConditionalCard}
                onClick={() => addChallengeCard(ConditionalSchema())}
              />
            </Grid.Column>
            <Grid.Column width={16}>
              <Image
                src={LoopCard}
                onClick={() => addChallengeCard(LoopSchema())}
              />
            </Grid.Column>
          </Grid>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};

export default connect(
  null,
  dispatch => bindActionCreators({ ...actionCreators }, dispatch)
)(ChallengeCardModal);
