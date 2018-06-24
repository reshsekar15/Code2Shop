import React, { Component } from 'react';
import { Card, Grid, Dropdown, Header, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import actionTypes from '../../../store/actions/actionTypes';

import { operatorOptions } from './Helpers';

// eslint-disable-next-line
class ModifierCard extends Component { 
  state = {
    settingVarList: [],
    modifierNameList: [],
    modifierValueList: [],
  }

  // componentDidMount() {
  //   const {
  //     cardData,
  //     variableList
  //   } = this.props;

  //   const availableList = variableList
  //     .filter(v => v.cardType === 'variable')
  //     .map(v => ({
  //       value: v.cardGuid,
  //       text: v.variableName
  //     }));

  //   if (!availableList.find(v => v.value === cardData.modifierValue)) {
  //     availableList.push({ value: cardData.modifierValue, text: cardData.modifierValue });
  //   }

  //   if (!availableList.find(v => v.value === cardData.modifierName)) {
  //     availableList.push({ value: cardData.modifierName, text: cardData.modifierName });
  //   }

  //   // eslint-disable-next-line
  //   this.setState({
  //     settingVarList: availableList,
  //     modifierNameList: availableList,
  //     modifierValueList: availableList
  //   });
  // }

  onAddItem(prop, value) {
    this.setState({ [prop]: [...this.state[prop], { value, text: value }] });
  }

  updateCard(prop, value) {
    const { cardData: { cardGuid }, variableList, dispatch } = this.props;

    variableList.forEach((card) => {
      if (card.cardGuid === cardGuid) {
        // eslint-disable-next-line
        card[prop] = value;
      }
    });

    dispatch({ type: actionTypes.updateChallengeCard, variableList: [...variableList] });
  }

  render() {
    const {
      cardData: {
        cardGuid,
        isRemovable,
        settingVariable,
        modifierName,
        modifierOperator,
        modifierValue
      },
      removeChallengeCard
    } = this.props;

    const {
      cardData,
      variableList
    } = this.props;

    const availableList = variableList
      .filter(v => v.cardType === 'variable')
      .map(v => ({
        value: v.cardGuid,
        text: v.variableName
      }));

    if (!availableList.find(v => v.value === cardData.modifierValue)) {
      availableList.push({ value: cardData.modifierValue, text: cardData.modifierValue });
    }

    if (!availableList.find(v => v.value === cardData.modifierName)) {
      availableList.push({ value: cardData.modifierName, text: cardData.modifierName });
    }

    const settingVarList = variableList.map(v => ({ value: v.variableName, text: v.variableName }));

    return (
      <Grid.Column mobile={16} computer={16}>
        <Card fluid color="yellow">
          <Card.Content>
            <Card.Header>
              Modifier
              {isRemovable && (
              <Button
                icon
                onClick={() => removeChallengeCard(cardGuid)}
                basic
                floated="right"
                color="red"
                size="small"
              >
                <Icon name="trash alternate" color="red" />
              </Button>)}
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
                    onChange={(e, { value }) => this.updateCard('settingVariable', value)}
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
                    options={availableList}
                    value={modifierName}
                    onChange={(e, { value }) => this.updateCard('modifierName', value)}
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
                    onChange={(e, { value }) => this.updateCard('modifierOperator', value)}
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
                    options={availableList}
                    value={modifierValue}
                    onChange={(e, { value }) => this.updateCard('modifierValue', value)}
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

export default connect()(ModifierCard);
