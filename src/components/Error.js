import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';

const Error = ({ title, content }) => (
  <Grid columns={1}>
    <Grid.Row>
      <Grid.Column>
        <h2>{title}</h2>
        <p>{content}</p>
        <p>
          <a href="/" className="btn btn-primary">Go Back to Job List</a>
        </p>
      </Grid.Column>
    </Grid.Row>
  </Grid>);

Error.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

Error.defaultProps = {
  title: 'Uh oh',
  content: 'An unexpected error came up',
};

export default Error;
