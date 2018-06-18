import React from 'react';
import { Grid, Dropdown, Header } from 'semantic-ui-react';

import { truthOperators } from './Helpers';

const ConditionCheck = props => (
  <Grid>
    <Grid.Row columns="equal">
      <Grid.Column width={2}>
        <Header as="h1">{props.conditionType}</Header>
      </Grid.Column>
      <Grid.Column>
        <Dropdown
          fluid
          search
          selection
          className="card-inputs"
          placeholder="Name..."
          options={props.variableOptions}
          value={props.variableName}
          onChange={(e, { value }) => props.handleUpdate(props.cardGuid, 'modifierName', value)}
        />
      </Grid.Column>
      <Grid.Column>
        <Dropdown
          fluid
          search
          selection
          className="card-inputs"
          placeholder="Name..."
          options={truthOperators}
          value={props.variableTruthOperator}
          onChange={(e, { value }) => props.handleUpdate(props.cardGuid, 'modifierName', value)}
        />
      </Grid.Column>
      <Grid.Column>
        <Dropdown
          fluid
          search
          selection
          allowAdditions
          className="card-inputs"
          placeholder="Value..."
          options={props.variableOptions}
          value={props.variableTruthValue}
          onChange={(e, { value }) => props.handleUpdate(props.cardGuid, 'modifierName', value)}
          onAddItem={(e, { value }) => props.handleAddItem(props.cardGuid, 'modifierOperator', value)}
        />
      </Grid.Column>
      <Grid.Column width={2}>
        <Header as="h1">Then</Header>
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default ConditionCheck;
