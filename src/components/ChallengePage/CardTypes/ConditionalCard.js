import React from 'react';
import { Card, Grid, Button, Icon } from 'semantic-ui-react';

import CardWrapper from './CardWrapper';
import ConditionCheck from './ConditionalCheck';

// eslint-disable-next-line
const ConditionalCard = ({ cardGuid, variableOptions, conditionalObject, handleUpdate, removeChallengeCard, handleAddItem }) => (
  <Grid.Column mobile={16} computer={16}>
    <Card fluid color="red">
      <Card.Content>
        <Card.Header>
          Conditional
          <Button
            icon
            onClick={() => removeChallengeCard(cardGuid)}
            basic
            floated="right"
            color="red"
            size="small"
          >
            <Icon name="trash alternate" color="red" />
          </Button>
        </Card.Header>
      </Card.Content>
      <Card.Content>
        <Grid stackable>
          {conditionalObject.map(c => (
            <React.Fragment>
              {c.conditions.map(check => (
                <ConditionCheck
                  conditions={check}
                  handleUpdate={handleUpdate}
                  cardGuid={cardGuid}
                />
              ))}
              <Grid.Row>
                <Grid.Column floated="right" width={14}>
                  {c.actions.map(action => (
                    <CardWrapper
                      {...action}
                      variableOptions={variableOptions}
                      handleUpdate={handleUpdate}
                      handleAddItem={handleAddItem}
                    />
                  ))}
                </Grid.Column>
                <Grid.Column floated="right" width={14}>
                  <Button
                    fluid
                    onClick={() => this.toggleMenu()}
                    size="big"
                  >
                    <Icon name="add" />
                    Add Component
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </React.Fragment>
          ))}
        </Grid>
      </Card.Content>
    </Card>
  </Grid.Column>
);

export default ConditionalCard;
