import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../../store/actions/challenge_Actions';

import VariableCard from './VariableCard';
import ModifierCard from './ModifierCard';
import ConditionalCard from './ConditionalCard';
import LoopCard from './LoopCard';

const CardWrapper = (props) => {
  const { variableList, cardData } = props;
  const children = variableList.filter(v => v.parentGuid === cardData.cardGuid);

  switch (cardData.cardType) {
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
  null,
  dispatch => bindActionCreators({ ...actionCreators }, dispatch)
)(CardWrapper);
