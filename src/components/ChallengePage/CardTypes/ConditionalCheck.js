import React from 'react';
import { Card, Grid, Dropdown, Button, Icon, Header } from 'semantic-ui-react';

import { truthOperators } from './Helpers';

const ConditionCheck = props => (
  <Card.Content extra>
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
        <Grid.Column width={1}>
          <Button
            icon
            onClick={() => props.handleAddCondition(props.cardGuid, props.conditionGuid)}
          >
            <Icon name="add square" />
          </Button>
        </Grid.Column>
        <Grid.Column width={2}>
          <Header as="h1">Then</Header>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Card.Content>
);

export default ConditionCheck;
