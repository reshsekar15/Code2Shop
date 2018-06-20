import React from 'react';
import { Card, Grid, Input, Header, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../store/actions/challenge_Actions';

// eslint-disable-next-line
const VariableCard = (props) => {
  const {
    cardGuid,
    variableName,
    variableValue,
    updateChallengeCard
  } = props;
  console.log(props, variableName, variableValue);
  return (
    <Grid.Column mobile={16} computer={8}>
      <Card fluid color="red">
        <Card.Content>
          <Card.Header>
            Variable
            <Icon name="trash alternate" color="red" style={{ float: 'right' }} />
          </Card.Header>
        </Card.Content>
        <Card.Content>
          <Grid stackable>
            <Grid.Row columns={3}>
              <Grid.Column width={7}>
                <Input
                  fluid
                  className="card-inputs"
                  placeholder="Name..."
                  value={variableName}
                  onChange={(e, { value }) => updateChallengeCard(cardGuid, 'variableName', value)}
                />
              </Grid.Column>
              <Grid.Column textAlign="center" verticalAlign="bottom" width={2}>
                <Header as="h1"> = </Header>
              </Grid.Column>
              <Grid.Column width={7}>
                <Input
                  fluid
                  className="card-inputs"
                  placeholder="Value..."
                  value={variableValue}
                  onChange={(e, { value }) => updateChallengeCard(cardGuid, 'variableValue', value)}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Card.Content>
      </Card>
    </Grid.Column>);
};

export default connect(
  null,
  dispatch => bindActionCreators({ ...actionCreators }, dispatch)
)(VariableCard);
