import React from 'react';
import { Card, Grid, Dropdown, Header, Icon } from 'semantic-ui-react';

import { operatorOptions } from './Helpers';

// eslint-disable-next-line
const ModifierCard = ({ cardGuid, variableOptions, modifierName, modifierOperator, modifierValue, handleUpdate, handleAddItem }) => (
  <Grid.Column mobile={16} computer={16}>
    <Card fluid color="yellow">
      <Card.Content>
        <Card.Header>
          Modifier
          <Icon name="trash alternate" color="red" style={{ float: 'right' }} />
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Grid stackable>
          <Grid.Row columns="equal">
            <Grid.Column>
              <Dropdown
                fluid
                search
                selection
                className="card-inputs"
                placeholder="Name..."
                options={variableOptions}
                value={modifierName}
                onChange={(e, { value }) => handleUpdate(cardGuid, 'modifierName', value)}
              />
            </Grid.Column>
            <Grid.Column textAlign="center" verticalAlign="bottom" width={1}>
              <Header as="h1"> = </Header>
            </Grid.Column>
            <Grid.Column>
              <Dropdown
                fluid
                search
                selection
                allowAdditions
                className="card-inputs"
                placeholder="Name..."
                options={variableOptions}
                value={modifierValue}
                onChange={(e, { value }) => handleUpdate(cardGuid, 'modifierValue', value)}
                onAddItem={(e, { value }) => handleAddItem(cardGuid, 'modifierOperator', value)}
              />
            </Grid.Column>
            <Grid.Column textAlign="center" verticalAlign="bottom">
              <Dropdown
                fluid
                search
                selection
                options={operatorOptions}
                className="card-inputs"
                placeholder="Operation..."
                value={modifierOperator}
                onChange={(e, { value }) => handleUpdate(cardGuid, 'modifierOperator', value)}
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
                options={variableOptions}
                value={modifierValue}
                onChange={(e, { value }) => handleUpdate(cardGuid, 'modifierValue', value)}
                onAddItem={(e, { value }) => handleAddItem(cardGuid, 'modifierOperator', value)}
              />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Card.Content>
    </Card>
  </Grid.Column>
);

export default ModifierCard;
