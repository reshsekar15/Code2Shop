import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Grid, Segment } from 'semantic-ui-react';

import computer from '../images/LandingPage/computer_png.png';
import progress from '../images/LandingPage/progress_png.png';
import items from '../images/LandingPage/items_png.png';

import InfoCard from '../components/Landing/InfoCard';

import Partners from '../components/Landing/Partners';
import Jumbotron from '../components/Landing/Jumbotron';
import Footer from '../components/Landing/Footer';

class LandingPage extends Component {
  state = {}
  render() {
    return (
      <div
        className="container"
        style={{ marginTop: '-20px' }}
      >
        <Jumbotron />
        <Segment basic>
          <p className="information-header-text">Get Services & Products for learning to code.</p>
          {/* eslint-disable-next-line */}
          <p className="information-sub-header-text">here's how...</p>
          <Grid columns="equal" stackable>
            <Grid.Column>
              <InfoCard
                image={computer}
                imageSize="small"
                headerText="Complete Challenges"
                subHeaderText="Learn to code with step by step instructions"
                buttonText="Go to Challenges"
                buttonHref="/challenges"
              />
            </Grid.Column>
            <Grid.Column>
              <InfoCard
                image={progress}
                imageSize="small"
                headerText="Earn Points"
                subHeaderText="Earn points by completing coding challenges"
              />
            </Grid.Column>
            <Grid.Column>
              <InfoCard
                image={items}
                imageSize="medium"
                headerText="Free Products & Services"
                subHeaderText="Redeem your points for gift cards & coupons"
                buttonText="Go to Products"
                buttonHref="/products"
              />
            </Grid.Column>
          </Grid>
        </Segment>
        <Partners />
        <Footer />
      </div>
    );
  }
}

export default connect(
  state => state.app,
  null
)(LandingPage);
