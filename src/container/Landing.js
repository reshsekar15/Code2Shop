import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Menu, Image, Grid, Segment, Button, Header, Icon } from 'semantic-ui-react';

import jumbotronImage from '../images/woman-looking-at-laptop.jpeg';
import { compose } from 'recompose';
import Group4 from '../logo/Group 4.png';

import { brands } from '../brand-logos';

class LandingPage extends Component {
  state = {}
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Menu fixed="top">
              <Menu.Item>
                <Image src={Group4} size="tiny" />
              </Menu.Item>
              <Menu.Item position="right">
                <Button 
                  basic
                  as="a"
                  href="/signin"
                >LOGIN</Button>
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column className="landing-page-jumbotron">
            <Image src={jumbotronImage} />
            <div
              className="floating-message"
            >
              <Header as="h1" className="fancy-font">Earn free products</Header>
              <Header as="h2">by learning to code</Header>
              <Button className="c2s-aqua">Join Now</Button>
            </div>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} style={{ backgroundColor: 'white' }}>
          <Grid.Column>
            <Grid>
              <Grid.Row>
                <Grid.Column>
                  <p className="information-header-text">Get Services & Products for learning to code.</p>
                  <p className="information-sub-header-text">here's how...</p>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={1}>
                <Grid.Column>
                  <Container>
                    <Segment.Group horizontal>
                      <Segment>
                        <Header as="h3" icon textAlign="center">
                          <Icon className="c2s-aqua-text" name="square outline" size="huge" />
                          <Header.Content>Complete Challenges</Header.Content>
                          <Header.Subheader>
                            Learn to code with step by step instructions
                      </Header.Subheader>
                        </Header>
                      </Segment>
                      <Segment>
                        <Header as="h3" icon textAlign="center">
                          <Icon className="c2s-aqua-text" name="square outline" size="huge" />
                          <Header.Content>Earn Points</Header.Content>
                          <Header.Subheader>
                            Earn points by completing coding challenges
                      </Header.Subheader>
                        </Header>
                      </Segment>
                      <Segment >
                        <Header as="h3" icon textAlign="center">
                          <Icon className="c2s-aqua-text" name="square outline" size="huge" />
                          <Header.Content>Free Products & Services</Header.Content>
                          <Header.Subheader>
                            Redeem your points for gift cards & coupons
                      </Header.Subheader>
                        </Header>
                      </Segment>
                    </Segment.Group>
                  </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row className="products-and-services">
          <Grid.Column className="landing-page-jumbotron">
            <Header as="h1" textAlign="center" className="fancy-font">Products & Services</Header>
            <Image.Group size="medium">
              {brands.map(img => <Image src={img.image} />)}
            </Image.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default compose(
  connect(
    state => state.app
  )
)(LandingPage);
