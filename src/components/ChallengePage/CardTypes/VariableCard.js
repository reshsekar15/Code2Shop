import React, { Component } from 'react';
import { Card, Grid, Input, Header, Icon, Button } from 'semantic-ui-react';

// eslint-disable-next-line
class VariableCard extends Component {
  updateCard(prop, value) {
    const { cardData: { cardGuid }, updateChallengeCard } = this.props;

    console.log(cardGuid, updateChallengeCard);

    updateChallengeCard(cardGuid, prop, value);
  }

  render() {
    const {
      cardData: {
        cardGuid,
        variableName,
        variableValue,
        isRemovable,
      },
      updateChallengeCard,
      removeChallengeCard
    } = this.props;
    console.log(this.props);

    return (
      <Grid.Column mobile={16} computer={8}>
        <Card fluid color="red">
          <Card.Content>
            <Card.Header>
              Variable
              {isRemovable && (
              <Button
                icon
                onClick={() => removeChallengeCard(cardGuid)}
                basic
                floated="right"
                color="red"
                size="small"
              >
                <Icon name="trash alternate" color="red" />
              </Button>)}
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Grid stackable>
              <Grid.Row columns={3}>
                <Grid.Column width={7}>
                  <Input
                    fluid
                    className="card-inputs"
                    placeholder="Name..."
                    value={variableName}
                    onChange={(e, { value }) => this.updateCard('variableName', value)}
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom" width={2}>
                  <Header as="h1"> = </Header>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Input
                    fluid
                    className="card-inputs"
                    placeholder="Value..."
                    value={variableValue}
                    onChange={(e, { value }) => this.updateCard('variableName', value)}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </Grid.Column>);
  }
}

export default VariableCard;

// export default VariableCard;
