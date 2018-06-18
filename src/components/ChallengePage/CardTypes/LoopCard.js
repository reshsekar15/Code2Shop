import React, { Component } from 'react';
import { Card, Button, Grid, Icon } from 'semantic-ui-react';

import CardWrapper from './CardWrapper';
import LoopCheck from './LoopCheck';

class LoopCard extends Component {
  state = {
    selectedCards: [{
      cardType: 'variable',
      variableName: 'x',
      variableValue: '0'
    }, {
      cardType: 'variable',
      variableName: 'y',
      variableValue: '100'
    }]
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    const { selectedCards } = this.state;
    return (
      <Grid.Column width={16}>
        <Card fluid color="green">
          <Card.Content>
            <Card.Header>
              Loop
              <Icon name="trash alternate" color="red" style={{ float: 'right' }} />
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={16}>
                  <LoopCheck conditionType="While" />
                </Grid.Column>
              </Grid.Row>
              {selectedCards.map(card => (
                <Grid.Row centered>
                  <Grid.Column width={12}>
                    <CardWrapper {...card} />
                  </Grid.Column>
                </Grid.Row>
              ))}
              <Grid.Row centered>
                <Grid.Column width={12}>
                  <Button
                    fluid
                    onClick={() => this.toggleMenu()}
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

export default LoopCard;
