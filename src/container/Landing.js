import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Menu, Image, Grid, Segment, Button, Header, Responsive, Visibility, List } from 'semantic-ui-react';

import jumbotronImage from '../images/LandingPage/woman-looking-at-laptop.jpg';
import computer from '../images/LandingPage/computer_png.png';
import progress from '../images/LandingPage/progress_png.png';
import items from '../images/LandingPage/items_png.png';
import Logo from '../logo/Code2Shop-Logo-Contrast.png';

import { brands } from '../brand-logos';

import SignOutButton from '../components/UserManagement/SignOut';

const HomepageHeading = ({ mobile }) => (
  <Segment className="landing-page-jumbotron" style={{ padding: 0 }}>
    <Image src={jumbotronImage} centered verticalAlign="middle" style={{ width: '110vw', marginTop: '-10vw' }} />
    {!mobile && (
      <div
        className="floating-message"
      >
        <Header as="h1" className="fancy-font">Earn free products</Header>
        <Header as="h2">by learning to code</Header>
        <Button as="a" href="/signup" className="c2s-aqua">Join Now</Button>
      </div>)}
    {mobile && (
      <div className="floating-message-mobile">
        <div className="content-to-center">
          <Header as="h3" className="fancy-font">Earn free products</Header>
          <Header as="h4">by learning to code</Header>
          <Button as="a" href="/signup" className="c2s-aqua">Join Now</Button>
        </div>
      </div>
    )}
  </Segment>
);

class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children, userInfo } = this.props;
    const { fixed } = this.state;

    return (
      <Responsive {...Responsive.onlyComputer}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment textAlign="center" style={{ minHeight: 700, padding: 0, margin: 0 }} vertical>
            <Menu
              fixed={fixed ? 'top' : null}
              pointing={!fixed}
              secondary={!fixed}
              size="large"
              style={{ margin: 0 }}
            >
              <Menu.Item>
                <Header as="h3" className="c2s-logo">
                  <Image src={Logo} size="mini" />
                  <Header.Content>
                    <strong>CODE</strong> 2 SHOP
                  </Header.Content>
                </Header>
              </Menu.Item>
              <Menu.Item position="right">
                {!!userInfo && (<SignOutButton />)}
                {!userInfo && (
                  <Button
                    basic
                    as="a"
                    href="/signin"
                  >
                    LOG IN
                  </Button>)}
              </Menu.Item>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    );
  }
}

class MobileContainer extends Component {
  state = {}

  handlePusherClick = () => {
    const { sidebarOpened } = this.state;

    if (sidebarOpened) this.setState({ sidebarOpened: false });
  }

  handleToggle = () => this.setState({ sidebarOpened: !this.state.sidebarOpened })

  render() {
    const { children } = this.props;
    // const { sidebarOpened } = this.state;

    return (
      <Responsive {...Responsive.onlyMobile}>
        <Segment textAlign="center" style={{ minHeight: 350, padding: 0, margin: 0 }} vertical>
          <Menu
            pointing
            secondary
            size="large"
            style={{ margin: 0 }}
          >
            <Menu.Item>
              <Header as="h3" className="c2s-logo">
                <Image src={Logo} size="mini" />
                <Header.Content>
                  <strong>CODE</strong> 2 SHOP
                </Header.Content>
              </Header>
            </Menu.Item>
            <Menu.Item position="right">
              <Button
                basic
                as="a"
                href="/signin"
              >
                LOG IN
              </Button>
            </Menu.Item>
          </Menu>
          <HomepageHeading mobile />
        </Segment>
        {children}
      </Responsive>
    );
  }
}

const ResponsiveContainer = ({ children, ...props }) => (
  <div>
    <DesktopContainer {...props}>{children}</DesktopContainer>
    <MobileContainer {...props}>{children}</MobileContainer>
  </div>
);

class LandingPage extends Component {
  state = {}
  render() {
    console.log(this.props);
    return (
      <ResponsiveContainer {...this.props}>
        <Segment basic >
          <p className="information-header-text">Get Services & Products for learning to code.</p>
          {/* eslint-disable-next-line */}
          <p className="information-sub-header-text">here's how...</p>
          <Grid columns="equal" stackable>
            <Grid.Column>
              <Segment basic style={{ width: '100%', height: '100%' }}>
                <Image src={computer} centered size="small" />
                <Header as="h3" icon textAlign="center">
                  <Header.Content>Complete Challenges</Header.Content>
                  <Header.Subheader>
                    Learn to code with step by step instructions
                  </Header.Subheader>
                </Header>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic style={{ width: '100%', height: '100%' }}>
                <Image src={progress} centered size="small" />
                <Header as="h3" icon textAlign="center">
                  <Header.Content>Earn Points</Header.Content>
                  <Header.Subheader>
                    Earn points by completing coding challenges
                  </Header.Subheader>
                </Header>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment basic style={{ width: '100%', height: '100%' }}>
                <Image src={items} centered size="medium" />
                <Header as="h3" icon textAlign="center">
                  <Header.Content>Free Products & Services</Header.Content>
                  <Header.Subheader>
                    Redeem your points for gift cards & coupons
                  </Header.Subheader>
                </Header>
              </Segment>
            </Grid.Column>
          </Grid>
        </Segment>
        <Segment basic className="products-and-services">
          <Header as="h1" textAlign="center" className="fancy-font">Products & Services</Header>
          <Grid padded stackable columns="equal">
            {brands.map(img => (
              <Grid.Column verticalAlign="middle">
                <Image size="medium" centered src={img.image} />
              </Grid.Column>
            ))}
          </Grid>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as="h4" content="About" />
                  <List link inverted>
                    <List.Item as="a">About Us</List.Item>
                    <List.Item as="a">Contact Us</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={13}>
                  <Header as="h4" inverted>Footer Header</Header>
                  <p>
                    Extra space for a call to action inside the
                    footer that could help re-engage users.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </ResponsiveContainer>
    );
  }
}

export default connect(
  state => state.app,
  null
)(LandingPage);
