import React, { Component } from 'react';
import { Card, Button, Grid, Icon, Segment, Header, Menu } from 'semantic-ui-react';

import CardWrapper from './CardWrapper';

class LoopCard extends Component {
  state = {
    showMenu: true,
    selectedCards: [{
      cardType: 'variable',
      startingValue: 0
    },{
      cardType: 'conditional',
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
            <Card.Header style={{ fontSize: '3rem', padding: '10px 20px' }}>
              Loop
            </Card.Header>
            <Card.Description>
              <Grid stackable>
                {selectedCards.map(card => (
                  <Grid.Row>
                    <Grid.Column width={2} verticalAlign="middle">
                      <Header as="h1">Step 1:</Header>
                    </Grid.Column>
                    <Grid.Column width={14}>
                      <CardWrapper {...card} />
                    </Grid.Column>
                  </Grid.Row>
                ))}
                <Grid.Row>
                  <Grid.Column width={2} verticalAlign="middle">
                    <Header as="h1">Step 2:</Header>
                  </Grid.Column>
                  <Grid.Column width={14}>
                    <Segment
                      as="a"
                      color="grey"
                      inverted
                      style={{ marginRight: '-1.5em' }}
                    >
                      <Icon style={{ width: '100%', textAlign: 'right' }} name="add" size="large" />
                    </Segment>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} verticalAlign="middle">
                    <Header as="h1">Step 3:</Header>
                  </Grid.Column>
                  <Grid.Column width={14}>
                    <Segment
                      as="a"
                      color="grey"
                      inverted
                      style={{ marginRight: '-1.5em' }}
                      onClick={() => this.toggleMenu()}
                    >
                      <Icon style={{ width: '100%', textAlign: 'right' }} name="add" size="large" />
                    </Segment>
                    {showMenu && (
                      <Menu vertical>
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
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button fluid>Save</Button>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

export default LoopCard;
