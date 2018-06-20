import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import CardWrapper from './CardTypes/CardWrapper';

const ChallengeStep = (props) => {
  const {
    index,
  } = props;

  return (
    <Grid.Row>
      <Grid.Column width={2}>
        <Header as="h2">Step {index + 1}:</Header>
      </Grid.Column>
      <Grid.Column width={14}>
        <CardWrapper
          {...props}
        />
      </Grid.Column>
    </Grid.Row>
  );
};

export default ChallengeStep;
