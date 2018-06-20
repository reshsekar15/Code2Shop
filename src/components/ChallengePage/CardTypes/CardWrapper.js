import React from 'react';
import { connect } from 'react-redux';

import VariableCard from './VariableCard';
import ModifierCard from './ModifierCard';
import ConditionalCard from './ConditionalCard';
import LoopCard from './LoopCard';

const CardWrapper = (props) => {
  const { cardType, variableList, cardGuid } = props;
  const children = variableList.filter(v => v.parentGuid === cardGuid);
  switch (cardType) {
    case 'variable':
      return (
        <VariableCard {...props} />
      );
    case 'modifier':
      return (
        <ModifierCard {...props} />
      );
    case 'conditional':
      return (
        <ConditionalCard {...props} cardChildren={children} />
      );
    case 'loop':
      return (
        <LoopCard {...props} cardChildren={children} />
      );
    default:
      return null;
  }
};

export default connect(
  state => state.challenge,
  null
)(CardWrapper);
