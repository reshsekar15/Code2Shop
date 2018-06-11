import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

class ChallengeCard extends Component {
  state = {
    cardType: 'variable',
  }
  render() {
    const { cardType } = this.state;
    return (
      <Card>
        <Card.Content>
          <Card.Header>
            {cardType}
          </Card.Header>
          <Card.Description>
            <Button>Save</Button>
          </Card.Description>
        </Card.Content>
      </Card>
    );
  }
}

export default ChallengeCard;
