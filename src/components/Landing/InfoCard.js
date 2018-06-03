import React from 'react';
import { Segment, Header, Image, Button } from 'semantic-ui-react';

const InfoCard = ({ image, imageSize, headerText, subHeaderText, buttonText, buttonHref }) => (
  <Segment basic style={{ width: '100%', height: '100%' }}>
    <Image src={image} centered size={imageSize} />
    <Header as="h3" icon textAlign="center">
      <Header.Content>{headerText}</Header.Content>
      <Header.Subheader>
        {subHeaderText}
      </Header.Subheader>
    </Header>
    {buttonText && <Button primary fluid as="a" href={buttonHref}>{buttonText}</Button>}
  </Segment>
);

export default InfoCard;
