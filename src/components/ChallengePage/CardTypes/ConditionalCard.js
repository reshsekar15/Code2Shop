import React, { Component } from 'react';
import { Card, Grid, Button, Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';
import actionTypes from '../../../store/actions/actionTypes';

import CardWrapper from './CardWrapper';
import ConditionCheck from './ConditionalCheck';

class ConditionalCard extends Component {
  constructor() {
    super();

    this.updateCard = this.updateCard.bind(this);
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  updateCard(prop, value) {
    const { cardData: { cardGuid }, variableList, dispatch } = this.props;

    variableList.forEach((card) => {
      if (card.cardGuid === cardGuid) {
        // eslint-disable-next-line
        card[prop] = value;
        console.log(prop, value, card);
      }
    });

    dispatch({ type: actionTypes.updateChallengeCard, variableList: [...variableList] });
  }

  render() {
    const {
      cardChildren,
      showChallengeCardModal,
      removeChallengeCard,
      cardData,
      variableList,
      cardData: {
        cardGuid,
        isRemovable,
      }
    } = this.props;

    const varList = variableList
      .filter(v => v.cardType === 'variable');

    const truthValue = varList
      .map(v => ({
        value: v.cardGuid,
        text: v.variableName
      }));

    if (!truthValue.find(v => v.value === cardData.truthValue)) {
      truthValue.push({ value: cardData.truthValue, text: cardData.truthValue });
    }

    const variableCheck = varList.map(v => ({ value: v.variableName, text: v.variableName }));

    return (
      <Grid.Column width={16}>
        <Card fluid color="green">
          <Card.Content>
            <Card.Header>
              Loop
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
              <Grid.Row>
                <Grid.Column width={16}>
                  <ConditionCheck
                    conditionType="While"
                    variableCheckOptions={variableCheck}
                    truthValueOptions={truthValue}
                    handleUpdate={this.updateCard}
                    {...cardData}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>
          <Card.Content extra>
            <Grid>
              {cardChildren.map(card => (
                <Grid.Row>
                  <Grid.Column width={16}>
                    <CardWrapper cardData={card} />
                  </Grid.Column>
                </Grid.Row>
              ))}
              <Grid.Row>
                <Grid.Column width={16}>
                  <Button
                    fluid
                    onClick={() => showChallengeCardModal(cardGuid)}
                    size="big"
                  >
                    <Icon name="add" />
                    Add Component
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card.Content>

        </Card>
      </Grid.Column>
    );
  }
}

export default connect()(ConditionalCard);


// eslint-disable-next-line
// const ConditionalCard = ({ cardGuid, variableOptions, conditionalObject, handleUpdate, removeChallengeCard, handleAddItem }) => (
//   <Grid.Column mobile={16} computer={16}>
//     <Card fluid color="red">
//       <Card.Content>
//         <Card.Header>
//           Conditional
//           <Button
//             icon
//             onClick={() => removeChallengeCard(cardGuid)}
//             basic
//             floated="right"
//             color="red"
//             size="small"
//           >
//             <Icon name="trash alternate" color="red" />
//           </Button>
//         </Card.Header>
//       </Card.Content>
//       <Card.Content>
//         <Grid stackable>
//           {conditionalObject.map(c => (
//             <React.Fragment>
//               {c.conditions.map(check => (
//                 <ConditionCheck
//                   conditions={check}
//                   handleUpdate={handleUpdate}
//                   cardGuid={cardGuid}
//                 />
//               ))}
//               <Grid.Row>
//                 <Grid.Column floated="right" width={14}>
//                   {c.actions.map(action => (
//                     <CardWrapper
//                       {...action}
//                       variableOptions={variableOptions}
//                       handleUpdate={handleUpdate}
//                       handleAddItem={handleAddItem}
//                     />
//                   ))}
//                 </Grid.Column>
//                 <Grid.Column floated="right" width={14}>
//                   <Button
//                     fluid
//                     onClick={() => this.toggleMenu()}
//                     size="big"
//                   >
//                     <Icon name="add" />
//                     Add Component
//                   </Button>
//                 </Grid.Column>
//               </Grid.Row>
//             </React.Fragment>
//           ))}
//         </Grid>
//       </Card.Content>
//     </Card>
//   </Grid.Column>
// );

// export default ConditionalCard;
