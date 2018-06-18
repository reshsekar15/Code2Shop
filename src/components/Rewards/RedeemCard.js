import React from 'react';
import { Card, Image, Button } from 'semantic-ui-react';

const RedeemCard = ({ rewardInfo, redeemed, handleRedeemPoints }) => (
  <Card>
    <Image src={rewardInfo.image} style={{ margin: '10px' }} />
    <Card.Content>
      <Card.Description>
        {rewardInfo.description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Button
        basic
        className={redeemed.indexOf(rewardInfo.id) > -1 ? 'strike-through' : 'redeemable'}
        onClick={() => handleRedeemPoints(rewardInfo.rewardValue, rewardInfo.id)}
      >
        {rewardInfo.rewardValue} points
      </Button>
    </Card.Content>
  </Card>
);

export default RedeemCard;
