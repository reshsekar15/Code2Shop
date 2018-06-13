import React, { Component } from 'react';
import { Card, Button, Grid, Input, Header } from 'semantic-ui-react';

class VariableCard extends Component {
  state = {
    cardType: 'variable',
  }
  render() {
    const { cardType } = this.state;
    return (
      <Grid.Column mobile={16} computer={4}>
        <Card fluid color="red">
          <Card.Content>
            <Card.Header>
              Variable
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Grid stackable>
              <Grid.Row columns={3}>
                <Grid.Column width={7} style={{ padding: '0 5px' }}>
                  <Header as="h3" style={{ margin: '0 0' }}> Name </Header>
                  <Input fluid value={this.props.name} />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom" width={2} style={{ padding: '0 5px' }}>
                  <Header as="h3" style={{ fontSize: '3rem' }}> = </Header>
                </Grid.Column>
                <Grid.Column width={7} style={{ padding: '0 5px' }}>
                  <Header as="h3" style={{ margin: '0 0' }}> Value </Header>
                  <Input fluid value={this.props.startingValue} />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </Grid.Column>
    );
  }
}

export default VariableCard;
