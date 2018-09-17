import React, { Component } from 'react';
import { Modal, Grid, Image } from 'semantic-ui-react';
import { connect } from 'react-redux';
import actionTypes from '../../store/actions/actionTypes';

import VariableCard from '../../images/ChallengeCards/VariableCard.PNG';
import ModifierCard from '../../images/ChallengeCards/ModifierCard.PNG';
import ConditionalCard from './CardTypes/ConditionalCard';
import LoopCard from '../../images/ChallengeCards/LoopCard.PNG';

import VariableSchema from './CardTypes/Schema/Variable';
import ModifierSchema from './CardTypes/Schema/Modifier';
import ConditionalSchema from './CardTypes/Schema/Conditional';
import LoopSchema from './CardTypes/Schema/Loop';

class ChallengeCardModal extends Component {
  addCard(card) {
    const { dispatch } = this.props;

    dispatch({
      type: actionTypes.addChallengeCard,
      card
    });
  }
  render() {
    const {
      showCardSelectMenu,
      closeChallengeCardModal,
      parentGuid
    } = this.props;

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
                  onClick={() => this.addCard(VariableSchema(parentGuid))}
                />
              </Grid.Column>
              <Grid.Column width={16}>
                <Image
                  src={ModifierCard}
                  onClick={() => this.addCard(ModifierSchema(parentGuid))}
                />
              </Grid.Column>
              <Grid.Column width={16}>
                <Image
                  src={ConditionalCard}
                  onClick={() => this.addCard(ConditionalSchema(parentGuid))}
                />
              </Grid.Column>
              <Grid.Column width={16}>
                <Image
                  src={LoopCard}
                  onClick={() => this.addCard(LoopSchema(parentGuid))}
                />
              </Grid.Column>
            </Grid>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
}

export default connect()(ChallengeCardModal);
