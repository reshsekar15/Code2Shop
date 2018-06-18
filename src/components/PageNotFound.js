import React from 'react';
import { Grid, Button, Card } from 'semantic-ui-react';

const PageNotFound = () => (
  <Grid columns={1} centered style={{ height: '100vh' }}>
    <Grid.Column
      computer={6}
      table={10}
      mobile={16}
      textAlign="center"
      className="middle-align-content"
    >
      <Card fluid>
        <Card.Content>
          <Card.Header>Dude! Wheres my car!?</Card.Header>
          <Card.Description>
            The page you tried going to doesnt exist.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button primary fluid onClick={this.props.history.goBack()}>
            Click Here to Go Back.
          </Button>
        </Card.Content>
      </Card>
    </Grid.Column>
  </Grid>);

export default PageNotFound;
