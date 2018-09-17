import React from 'react';
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react';

const Footer = () => (
  <Segment inverted vertical style={{ padding: '5em 0em' }}>
    <Container>
      <Grid divided inverted stackable>
        <Grid.Row>
          <Grid.Column width={3}>
            <Header inverted as="h4" content="About" />
            <List link inverted>
              <List.Item as="a" href="/about">About Us</List.Item>
              <List.Item as="a" href="/contact">Contact Us</List.Item>
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
);

export default Footer;
