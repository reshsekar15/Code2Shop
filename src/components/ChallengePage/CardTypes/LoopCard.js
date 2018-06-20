import React, { Component } from 'react';
import { Card, Button, Grid, Icon } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../store/actions/challenge_Actions';

import CardWrapper from './CardWrapper';
import LoopCheck from './LoopCheck';

class LoopCard extends Component {
  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    const {
      cardChildren,
      showChallengeCardModal,
      removeChallengeCard,
      cardGuid
    } = this.props;
    return (
      <Grid.Column width={16}>
        <Card fluid color="green">
          <Card.Content>
            <Card.Header>
              Loop
              <Button
                icon
                onClick={() => removeChallengeCard(cardGuid)}
                basic
                floated="right"
                color="red"
                size="small"
              >
                <Icon name="trash alternate" color="red" />
              </Button>
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={16}>
                  <LoopCheck conditionType="While" />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
          <Card.Content extra>
            <Grid>
              {cardChildren.map(card => (
                <Grid.Row>
                  <Grid.Column width={16}>
                    <CardWrapper {...card} />
                  </Grid.Column>
                </Grid.Row>
              ))}
              <Grid.Row>
                <Grid.Column width={16}>
                  <Button
                    fluid
                    onClick={() => showChallengeCardModal(cardGuid)}
                    size="big"
                  >
                    <Icon name="add" />
                    Add Component
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>

        </Card>
      </Grid.Column>
    );
  }
}

export default connect(
  null,
  dispatch => bindActionCreators({ ...actionCreators }, dispatch)
)(LoopCard);
