import React, { Component } from 'react';
import { Statistic, Card, Container } from 'semantic-ui-react';
import RedeemCard from './RedeemCard';

import { brands } from '../../brand-logos';

class RewardsPage extends Component {
  constructor() {
    super();

    this.state = {
      availablePoints: 375,
      redeemed: []
    };
    this.handleRedeemPoints = this.handleRedeemPoints.bind(this);
  }

  handleRedeemPoints(value, id) {
    const { redeemed } = this.state;
    const newRedeemed = redeemed;

    if (redeemed.indexOf(id) === -1 && (this.state.availablePoints - value) >= 0) {
      newRedeemed.push(id);
      this.setState({ availablePoints: this.state.availablePoints - value, redeemed: newRedeemed });
    }
  }

  render() {
    const { redeemed } = this.state;
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
            {brands.map((brand, index) => (
              <RedeemCard
                // eslint-disable-next-line
                key={`${brand}-${index}`}
                rewardInfo={brand}
                redeemed={redeemed}
                handleRedeemPoints={this.handleRedeemPoints}
              />))}
          </Card.Group>
        </Container>
      </div>
    );
  }
}

export default RewardsPage;
