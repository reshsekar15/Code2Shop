import React, {Component} from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';

import veridium from '../brand-logos/Veridium-Logo.png';

class RedeemCard extends Component {
  render() {
    const {rewardInfo, redeemed, handleRedeemPoints} = this.props;
    return (
      <Card>
        <Image src={rewardInfo.image} style={{margin: '10px'}} />
        <Card.Content>
          <Card.Description>
            {rewardInfo.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a 
            className={redeemed.indexOf(rewardInfo.id) > -1 ? 'strike-through' : 'redeemable'}
            onClick={() => handleRedeemPoints(rewardInfo.rewardValue, rewardInfo.id)}
          >
            {rewardInfo.rewardValue} points
          </a>
        </Card.Content>
      </Card>
    )
  }
}

export default RedeemCard;