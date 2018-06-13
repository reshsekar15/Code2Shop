import React, { Component } from 'react';
import { Card, Button, Grid, Icon, Segment, Header, Menu, Dropdown, Input } from 'semantic-ui-react';

import CardWrapper from './CardWrapper';

class ConditionalCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false,
      options: [
        {
          text: 'variable1',
          value: 'variable1'
        },
        {
          text: 'variable2',
          value: 'variable2'
        }
      ],
      selectedCards: [{
        cardType: 'variable',
        startingValue: 0
      }]
    };

    this.handleAddition = this.handleAddition.bind(this);
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  handleAddition(e, { value }) {
    this.setState({
      options: [{ text: value, value }, ...this.state.options],
    });
  }

  render() {
    const { showMenu, options } = this.state;
    return (
      <Grid.Column width={16}>
        <Card fluid color="green">
          <Card.Content>
            <Card.Header style={{ fontSize: '3rem', padding: '10px 20px' }}>
              Conditional
            </Card.Header>
            <Card.Description>
              <Grid stackable>
                <Grid.Row>
                  <Grid.Column width={2} verticalAlign="middle">
                    <Header as="h1">If </Header>
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Grid columns="equal">
                      <Grid.Row>
                        <Grid.Column>
                          <Dropdown
                            fluid
                            selection
                            value="variable1"
                            options={options}
                          />
                        </Grid.Column>
                        <Grid.Column>
                          <Dropdown fluid selection value="not_equal" options={[{text: '=', value: 'equal'},{text: '!==', value: 'not_equal'}]} />
                        </Grid.Column>
                        <Grid.Column>
                          <Dropdown
                            fluid
                            placeholder="Choose Language"
                            search
                            selection
                            allowAdditions
                            additionLabel="Add Custom Value...  "
                            onAddItem={this.handleAddition}
                            value="variable2"
                            options={options}
                          />
                        </Grid.Column>
                        <Grid.Column>
                          <Button icon>
                            <Icon name="add" />
                          </Button>
                        </Grid.Column>
                      </Grid.Row>
                    </Grid>
                  </Grid.Column>
                  <Grid.Column width={2} verticalAlign="middle">
                    <Header as="h1">Then</Header>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column width={2} verticalAlign="middle">
                    <Header as="h1">Else </Header>
                  </Grid.Column>
                  <Grid.Column width={14}>
                    <Header as="h3">Default Statement</Header>
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

export default ConditionalCard;
