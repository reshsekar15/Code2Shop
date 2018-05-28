import React from 'react';
import { TextArea } from 'semantic-ui-react';

const CompilerChallenge = ({ updateText, handleKeyUp }) => (
  <div className="code-container">
    <TextArea
      rows={45}
      wrap="hard"
      className="code-area"
      onChange={(e, { value }) => updateText(value)}
      onKeyDown={handleKeyUp}
    />
  </div>
);

export default CompilerChallenge;
