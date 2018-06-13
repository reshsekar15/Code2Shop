import React, { Component } from 'react';
import { Card, Button, Grid, Icon, Segment, Header, Menu } from 'semantic-ui-react';

import CardWrapper from './CardWrapper';

class IteratorCard extends Component {
  state = {
    showMenu: true,
    iteratingObject: null,
    iteratableObjects: [{
      name: 'variable1',
      columns: true,
      rows: true,
      value: [
        [0, 1, 2, 3, 4],
        [0, 1, 2, 3, 4],
        [0, 1, 2, 3, 4],
      ]
    },
    {
      name: 'variable2',
      columns: false,
      rows: true,
      value: [0, 1, 2, 3, 4]
    }]
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render() {
    const { showMenu, iteratableObjects, iteratingObject } = this.state;

    const availableObjects = iteratableObjects.map(obj => ({ text: obj.name, value: obj.name, key: obj.name }));
    const availableIterables = [];

    if (!!iteratingObject) {
      if (iteratableObjects.columns) {
        availableIterables.push({ text: 'By Column', value: 'column', key: 'column' });
      }
      if (iteratableObjects.rows) {
        availableIterables.push({ text: 'By Rows', value: 'rows', key: 'rows' });
      }
    }

    return (
      <Grid.Column width={16}>
        <Card fluid color="green">
          <Card.Content>
            <Card.Header style={{ fontSize: '3rem', padding: '10px 20px' }}>
              Loop
            </Card.Header>
            <Card.Description>
              <Grid stackable>
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

export default IteratorCard;
