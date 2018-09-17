import React from 'react';
import { Grid, Dropdown, Header } from 'semantic-ui-react';

import { truthOperators } from './Helpers';

const ConditionCheck = props => (
  <Grid>
    <Grid.Row columns="equal">
      <Grid.Column mobile={16} tablet={2} computer={2} widescreen={2}>
        <Header as="h1">{props.conditionType}</Header>
      </Grid.Column>
      <Grid.Column mobile={16} tablet={4} computer={4} widescreen={4}>
        <Dropdown
          fluid
          search
          selection
          className="card-inputs"
          placeholder="Name..."
          options={props.variableCheckOptions}
          value={props.variableCheck}
          onChange={(e, { value }) => props.handleUpdate('variableCheck', value)}
        />
      </Grid.Column>
      <Grid.Column mobile={16} tablet={4} computer={4} widescreen={4}>
        <Dropdown
          fluid
          search
          selection
          className="card-inputs"
          placeholder="Name..."
          options={truthOperators()}
          value={props.truthOperator}
          onChange={(e, { value }) => props.handleUpdate('truthOperator', value)}
        />
      </Grid.Column>
      <Grid.Column widescreen={6} computer={6} tablet={6} mobile={16}>
        <Dropdown
          fluid
          search
          selection
          allowAdditions
          className="card-inputs"
          placeholder="Value..."
          options={props.truthValueOptions}
          value={props.truthValue}
          onChange={(e, { value }) => props.handleUpdate('truthValue', value)}
        />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default ConditionCheck;
