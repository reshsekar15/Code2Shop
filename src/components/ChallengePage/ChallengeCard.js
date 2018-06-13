import React, { Component } from 'react';
import { Card, Button } from 'semantic-ui-react';

class ChallengeCard extends Component {
  state = {
    cardType: 'variable',
  }
  render() {
    const { cardType } = this.state;
    return (
      <Card color="red" style={{ borderRadius: '5px' }}>
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
