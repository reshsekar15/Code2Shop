import React, { Component } from 'react';
import { Menu, Tab  } from 'semantic-ui-react';
import UserInfoCard from './UserInfo';

import PointsPane from './PointsPane';
import CouponsPane from './CouponsPane';
import FriendsPane from './FriendsPane';

class SideNav extends Component {

  render() {
    const { userInfo } = this.props;
    const panes = [{
      menuItem: <Menu.Item className="side-info-tab"><div className="label-value">375</div>Points</Menu.Item>,
      render: () => <PointsPane />
    },{
      menuItem: <Menu.Item className="side-info-tab"><div className="label-value">2</div>Coupons</Menu.Item>,
      render: () => <CouponsPane />
    },{
      menuItem: <Menu.Item className="side-info-tab"><div className="label-value">2</div>Friends</Menu.Item>,
      render: () => <FriendsPane />
    }]

    return (
      <Menu vertical className="sidenav set-min-height">
        <UserInfoCard userInfo={userInfo} includeSettingIcon={true} />
        <Tab panes={panes} />
      </Menu>
    )
  }
}

export default SideNav;