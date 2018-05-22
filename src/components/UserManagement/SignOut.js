import React from 'react';

import { auth } from '../../Firebase';

const SignOutButton = (props) =>{
  return (
    <a
      className="navbar-sign-in"
			onClick={auth.doSignOut}
			href="/signin"
      >
    Sign Out
  </a>  
  )
}

export default SignOutButton;