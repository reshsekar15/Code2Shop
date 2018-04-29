import React from 'react';
import { Grid, Dimmer, Loader } from 'semantic-ui-react';

const Loading = () => {
  return (
    <Grid.Row>
      <Grid.Column>
        <Dimmer active inverted>
          <Loader>Loading</Loader>
        </Dimmer>
      </Grid.Column>
    </Grid.Row>
  )
}

export default Loading;