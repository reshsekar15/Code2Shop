import React from 'react';
import { Segment, Header, Grid, Image } from 'semantic-ui-react';
import { brands } from '../../brand-logos';

const Partners = () => (
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
);

export default Partners;
