import React from 'react';
import { Image, Segment, Button, Header } from 'semantic-ui-react';

import jumbotronImage from '../../images/LandingPage/woman-looking-at-laptop.jpg';

const Jumbotron = () => (
  <Segment className="landing-page-jumbotron" style={{ padding: 0 }}>
    <Image
      src={jumbotronImage}
      fluid
      centered
      verticalAlign="middle"
    />
    <div className="floating-message">
      <div className="content-to-center">
        <Header as="h1" className="fancy-font">Earn free products</Header>
        <Header as="h2">by learning to code</Header>
        <Button as="a" href="/signup" className="c2s-aqua">Join Now</Button>
      </div>
    </div>
  </Segment>
);

export default Jumbotron;
