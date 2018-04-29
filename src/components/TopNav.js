import React from 'react';
import { Menu } from 'semantic-ui-react';
import Group4 from '../logo/Group 4.png';

const TopNav = () => {
  return (
    <Menu fixed="top" className="top-navbar">
      <Menu.Item>
        <a className="brand-logo" href="/" >
          <img src={Group4} height='45' />
        </a>
      </Menu.Item>

    </Menu>
  )
}

export default TopNav;