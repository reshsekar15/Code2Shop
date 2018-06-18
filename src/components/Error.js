import React, { Component } from 'react';
import { Grid, Button, Card } from 'semantic-ui-react';
import { connect } from 'react-redux';

import sentry from '../helpers/sentry';

class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    const { state, state: { app: { userInfo } } } = this.props;
    this.setState({ error });
    sentry.captureException(error, {
      extra: {
        userInfo,
        errorInfo,
        state
      }
    });
  }

  render() {
    const { state: { status: { error } } } = this.props;

    if (!!this.state.error || !!error) {
      return (
        <Grid columns={1} centered style={{ height: '100vh' }}>
          <Grid.Column
            computer={6}
            table={10}
            mobile={16}
            textAlign="center"
            className="middle-align-content"
          >
            <Card>
              <Card.Content>
                <Card.Header>Oops! Something Happened!</Card.Header>
                <Card.Description>
                  Our team has been notified, but click here fill out a report.
                </Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Button fluid onClick={() => sentry.showReportDialog()}>
                  Send Error Report
                </Button>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>);
    }

    return this.props.children;
  }
}

export default connect(
  state => ({ state }),
  null
)(ErrorHandler);
