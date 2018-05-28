import React from 'react';
import { Container } from 'semantic-ui-react';
import DragContainer from './Container';

const DustbinMultipleTargets = ({ handleDragNDrop }) => (
  <Container>
    <DragContainer handleDragNDrop={handleDragNDrop} />
  </Container>
);

export default DustbinMultipleTargets;
