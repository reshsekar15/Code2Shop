import React from 'react';
import { Menu, Image } from 'semantic-ui-react';
import Group4 from '../logo/Group 4.png';

const TopNav = () => (
  <Menu fixed="top" className="top-navbar">
    <Menu.Item
      as="a"
      href="/"
      style={{ border: 'none' }}
    >
      <Image src={Group4} size="tiny" />
    </Menu.Item>
    <Menu.Item
      as="a"
      style={{ border: 'none' }}
      href="/challenges"
    >
      Challenges
    </Menu.Item>
    <Menu.Item
      as="a"
      style={{ border: 'none' }}
      href="/rewards"
    >
      Redeem
    </Menu.Item>
    <Menu.Item
      as="a"
      style={{ border: 'none' }}
      href="/about"
    >
      About Us
    </Menu.Item>
    <Menu.Item
      as="a"
      style={{ border: 'none' }}
      href="/contact"
    >
      Contact Us
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item as="a">
        <span style={{ fontSize: '2rem', height: '2rem', marginRight: '5px' }}>375</span>
        <span style={{ height: '2rem', lineHeight: 2.5 }}>points</span>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default TopNav;
