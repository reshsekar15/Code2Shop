import React, { Component } from 'react';
import { Icon, Image } from 'semantic-ui-react';

class UserInfoCard extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        username: ''
      },
      imageLink: ''
    };
  }

  componentDidMount() {
    const { userInfo } = this.props;

    const imageLink = userInfo.imageLink ? userInfo.imageLink : 'https://firebasestorage.googleapis.com/v0/b/code2shop-512a4.appspot.com/o/default-icon.png?alt=media&token=b3d2f48e-4c7d-44de-a56b-381e955c06a3';
    // eslint-disable-next-line
    this.setState({ userInfo, imageLink });
  }

  render() {
    const { userInfo, imageLink } = this.state;
    const { includeSettingIcon } = this.props;

    return (
      <div className="main-user-info">
        <Image avatar src={imageLink} />
        <span className="user-name">{userInfo.username}</span>
        {/* eslint-disable-next-line */}
        {includeSettingIcon && <Icon className="clickable" onClick={() => window.location.href = '/account'} size="large" name="setting" />}
      </div>
    );
  }
}

export default UserInfoCard;
