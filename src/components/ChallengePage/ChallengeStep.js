import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import CardWrapper from './CardTypes/CardWrapper';

const ChallengeStep = (props) => {
  const {
    cardType,
    index,
    cardChildren,
    guid
  } = props;

  return (
    <Grid.Row>
      <Grid.Column width={2}>
        <Header as="h2">Step {index + 1}:</Header>
      </Grid.Column>
      <Grid.Column width={14}>
        <CardWrapper
          cardType={cardType}
          cardGuid={guid}
          cardChildren={cardChildren}
        />
      </Grid.Column>
    </Grid.Row>
  );
};

export default ChallengeStep;
