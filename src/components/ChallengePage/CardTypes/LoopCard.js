import React, { Component } from 'react';
import { Card, Button, Grid, Icon, Menu } from 'semantic-ui-react';

import CardWrapper from './CardWrapper';
import ConditionCheck from './ConditionCheck';

class LoopCard extends Component {
  state = {
    showMenu: true,
    selectedCards: [{
      cardType: 'variable',
      startingValue: 0
    }]
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    const { showMenu, selectedCards } = this.state;
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
                  <ConditionCheck conditionType="While" />
                </Grid.Column>
              </Grid.Row>
              {selectedCards.map(card => (
                <Grid.Row>
                  <Grid.Column floated="right" width={14}>
                    <CardWrapper {...card} />
                  </Grid.Column>
                </Grid.Row>
              ))}
              <Grid.Row>
                <Grid.Column floated="right" width={14}>
                  <Button
                    fluid
                    onClick={() => this.toggleMenu()}
                    size="big"
                  >
                    <Icon name="add" />
                    Add Component
                  </Button>
                  {showMenu && (
                    <Menu fluid floating vertical>
                      <Menu.Item>
                        Variable
                      </Menu.Item>
                      <Menu.Item>
                        Conditional
                      </Menu.Item>
                      <Menu.Item>
                        Loop
                      </Menu.Item>
                    </Menu>
                  )}
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
