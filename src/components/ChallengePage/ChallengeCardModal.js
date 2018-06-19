import React from 'react';
import { Modal, Button, Header } from 'semantic-ui-react';

const ChallengeCardModal = (props) => {
  const {
    showCardSelectMenu,
    closeChallengeCardModal
  } = props;
  console.log(props);
  return (
    <Modal
      size="large"
      open={showCardSelectMenu}
      onClose={() => closeChallengeCardModal()}
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>We've found the following gravatar image associated with your e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button negative>No</Button>
        <Button positive icon='checkmark' labelPosition='right' content='Yes' />
      </Modal.Actions>
    </Modal>
  );
};

export default ChallengeCardModal;
