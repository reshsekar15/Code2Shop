import React from 'react';
import VariableCard from './VariableCard';
import ConditionalCard from './ConditionalCard';
import LoopCard from './LoopCard';

const CardWrapper = (props) => {
  const { cardType } = props;

  console.log(props);
  switch (cardType) {
    case 'variable':
      return (
        <VariableCard {...props} />
      );
    case 'conditional':
      return (
        <ConditionalCard {...props} />
      );
    case 'loop':
      return (
        <LoopCard {...props} />
      );
    default:
      return null;
  }
};

export default CardWrapper;
