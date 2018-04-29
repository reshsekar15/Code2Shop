import React from 'react';
import { Menu } from 'semantic-ui-react';
import Group4 from '../logo/Group 4.png';

const TopNav = () => {
  return (
    <Menu fixed="top" className="top-navbar">
      <Menu.Item style={{border: 'none'}}>
        <a className="brand-logo" href="/" >
          <img src={Group4} height='45' />
        </a>
      </Menu.Item>
      <Menu.Item 
        as="a" 
        style={{border: 'none'}}
        onClick={() => window.location.href = '/challenges'}
      >
        Challenges
      </Menu.Item>
      <Menu.Item 
        as="a" 
        style={{border: 'none'}}
        onClick={() => window.location.href = '/rewards'}
      >
        Redeem
      </Menu.Item>
      <Menu.Item 
        as="a" 
        style={{border: 'none'}}
        onClick={() => window.location.href = '/about'}
      >
        About Us
      </Menu.Item>
      <Menu.Item 
        as="a" 
        style={{border: 'none'}}
        onClick={() => window.location.href = '/contact'}
      >
        Contact Us
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as="a">
          <span style={{fontSize: '2rem', height:'2rem', marginRight: '5px'}}>375</span>
          <span style={{ height:'2rem', lineHeight: 2.5}}>points</span>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}

export default TopNav;