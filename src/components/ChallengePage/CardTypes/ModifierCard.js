import React, { Component } from 'react';
import { Card, Grid, Dropdown, Header, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../store/actions/challenge_Actions';

import { operatorOptions } from './Helpers';

// eslint-disable-next-line
class ModifierCard extends Component { 
  state = {
    settingVarList: [],
    modifierNameList: [],
    modifierValueList: [],
  }

  componentDidMount() {
    const {
      variableList
    } = this.props;

    const availableList = variableList
      .filter(v => v.cardType === 'variable')
      .map(v => ({
        value: v.cardGuid,
        text: v.variableName
      }));

      // eslint-disable-next-line
    this.setState({
      settingVarList: availableList,
      modifierNameList: availableList,
      modifierValueList: availableList
    });
  }

  onAddItem(prop, value) {
    this.setState({ [prop]: [...this.state[prop], { value, text: value }] });
  }

  render() {
    const {
      cardGuid,
      settingVariable,
      modifierName,
      modifierOperator,
      modifierValue,
      updateChallengeCard,
      removeChallengeCard
    } = this.props;
    const {
      settingVarList,
      modifierNameList,
      modifierValueList
    } = this.state;
    return (
      <Grid.Column mobile={16} computer={16}>
        <Card fluid color="yellow">
          <Card.Content>
            <Card.Header>
              Modifier
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
              <Grid.Row columns="equal">
                <Grid.Column>
                  <Dropdown
                    fluid
                    search
                    selection
                    allowAdditions
                    className="card-inputs"
                    placeholder="Name..."
                    options={settingVarList}
                    value={settingVariable}
                    onChange={(e, { value }) => updateChallengeCard(cardGuid, 'settingVariable', value)}
                    onAddItem={(e, { value }) => this.onAddItem('settingVarList', value)}
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
                    options={modifierNameList}
                    value={modifierName}
                    onChange={(e, { value }) => updateChallengeCard(cardGuid, 'modifierName', value)}
                    onAddItem={(e, { value }) => this.onAddItem('modifierNameList', value)}
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" verticalAlign="bottom">
                  <Dropdown
                    fluid
                    search
                    selection
                    options={operatorOptions()}
                    className="card-inputs"
                    placeholder="Operation..."
                    value={modifierOperator}
                    onChange={(e, { value }) => updateChallengeCard(cardGuid, 'modifierOperator', value)}
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
                    options={modifierValueList}
                    value={modifierValue}
                    onChange={(e, { value }) => updateChallengeCard(cardGuid, 'modifierValue', value)}
                    onAddItem={(e, { value }) => this.onAddItem('modifierValueList', value)}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
        </Card>
      </Grid.Column>);
  }
}

export default connect(
  state => state.challenge,
  dispatch => bindActionCreators({ ...actionCreators }, dispatch)
)(ModifierCard);
