import React from 'react';
import { connect } from 'react-redux';

import VariableCard from './VariableCard';
import ModifierCard from './ModifierCard';
import ConditionalCard from './ConditionalCard';
import LoopCard from './LoopCard';

const CardWrapper = (props) => {
  const { cardType, variableList, cardGuid } = props;

  const cardData = variableList.find(v => v.cardGuid === cardGuid);
  console.log(props, cardData);
  switch (cardType) {
    case 'variable':
      return (
        <VariableCard {...props} {...cardData} />
      );
    case 'modifier':
      return (
        <ModifierCard {...props} {...cardData} />
      );
    case 'conditional':
      return (
        <ConditionalCard {...props} {...cardData} />
      );
    case 'loop':
      return (
        <LoopCard {...props} {...cardData} />
      );
    default:
      return null;
  }
};

export default connect(
  state => state.challenge,
  null
)(CardWrapper);
