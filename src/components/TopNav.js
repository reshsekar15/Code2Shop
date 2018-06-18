import React from 'react';
import { Menu, Image, Header, Button, Container } from 'semantic-ui-react';
import Logo from '../logo/Code2Shop-Logo-Contrast.png';
import SignOutButton from './UserManagement/SignOut';

const TopNav = ({ url, userInfo }) => {
  if (url === '/') {
    return (
      <Menu
        fixed="top"
        size="large"
        style={{ margin: 0 }}
      >
        <Container>
          <Menu.Item
            as="a"
            href="/"
            style={{ border: 'none', padding: '5px' }}
          >
            <Header as="h3" className="c2s-logo">
              <Image src={Logo} size="mini" />
              <Header.Content>
                <strong>CODE</strong> 2 SHOP
              </Header.Content>
            </Header>
          </Menu.Item>
          <Menu.Item position="right">
            {!!userInfo && (<SignOutButton />)}
            {!userInfo && (
              <Button
                basic
                as="a"
                href="/signin"
              >
                LOG IN
              </Button>)}
          </Menu.Item>
        </Container>
      </Menu>
    );
  }

  return (
    <Menu
      fixed="top"
      size="large"
      style={{ margin: 0 }}
    >
      <Container>
        <Menu.Item
          as="a"
          href="/"
          style={{ border: 'none', padding: '5px' }}
        >
          <Header as="h3" className="c2s-logo">
            <Image src={Logo} size="mini" />
            <Header.Content>
              <strong>CODE</strong> 2 SHOP
            </Header.Content>
          </Header>
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
        <Menu.Menu position="right">
          <Menu.Item>
            {!!userInfo && (<SignOutButton />)}
            {!userInfo && (
              <Button
                basic
                as="a"
                href="/signin"
              >
                LOG IN
              </Button>)}
          </Menu.Item>
        </Menu.Menu>
      </Container>
    </Menu>
  );
};

export default TopNav;
