import React, { Component } from 'react';
import { Statistic, Card, Container } from 'semantic-ui-react';
import RedeemCard from './RedeemCard';

import veridium from '../brand-logos/Veridium-Logo.png';
import dragonfly from '../brand-logos/dragonflyconsultants.png';
import neev_life from '../brand-logos/neev_life.png';
import nfinite from '../brand-logos/nfinitestrength.jpg';
import stylebee from '../brand-logos/stylebee.svg';
import appachef from '../brand-logos/appachef.jpg';
import silicon42 from '../brand-logos/42siliconvalley_logo.png';
import angelhack from '../brand-logos/angelhack-4-logo2-3.jpg';

const brands=[{
  id: 1,
  image: veridium,
  description: 'Award of verde, a net-positive environmental and social impact cryptocurrency, that accounts for carbon offsets at the point of sale.',
  rewardValue: 100
},{
  id: 2,
  image: dragonfly,
  description: 'Free strengths-scope assessment and debrief sessions.',
  rewardValue: 150
},{
  id: 3,
  image: neev_life,
  description: '$20 off of $50 purchase or 35% discount on luxe home furnishings and clothing.',
  rewardValue: 50
},{
  id: 4,
  image: nfinite,
  description: 'Customized data-driven corrective exercise program.',
  rewardValue: 75
},{
  id: 5,
  image: stylebee,
  description: 'Discount on hair and makeup booking with top stylists.',
  rewardValue: 100
},{
  id: 6,
  image: appachef,
  description: 'Discount code for local chef-prepared meals.',
  rewardValue: 150
},{
  id: 7,
  image: silicon42,
  description: 'Top users can redeem to participate in a 28-day qualifying period (piscine) to participate in the coding program, with housing included.',
  rewardValue: 500
},{
  id: 8,
  image: angelhack,
  description: 'Redeem for free AngelHack events in the San Francisco Bay Area.',
  rewardValue: 50
}]

class RewardsPage extends Component {
  constructor() {
    super();

    this.state = {
      availablePoints: 375,
      redeemed: []
    }
  }

  handleRedeemPoints(value, id){
    const { redeemed } = this.state;
    const newRedeemed = redeemed;

    if(redeemed.indexOf(id) === -1 && (this.state.availablePoints - value) >= 0){
      newRedeemed.push(id);
      this.setState({availablePoints: this.state.availablePoints - value, redeemed: newRedeemed});
    }    
  }

  render() {
    const { redeemed} =this.state;
    return (
      <div className="partnership-container set-min-height">
        <Container>
          <div className="redeemable-points-value">
            <Statistic size="huge">
              <Statistic.Value className="primary-text">{this.state.availablePoints}</Statistic.Value>
              <Statistic.Label className="primary-text">Points</Statistic.Label>
            </Statistic>
          </div>
          <Card.Group>
            {brands.map(brand => <RedeemCard rewardInfo={brand} redeemed={redeemed} handleRedeemPoints={this.handleRedeemPoints.bind(this)}/>)}
          </Card.Group>
        </Container>
      </div>
    )
  }
}

export default RewardsPage;