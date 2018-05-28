import React from 'react';
import { Button } from 'semantic-ui-react';

import { auth } from '../../firebase';

const SignOutButton = () => (
  <Button
    as="a"
    basic
    onClick={auth.doSignOut}
    href="/signin"
  >
    Sign Out
  </Button>
);

export default SignOutButton;
