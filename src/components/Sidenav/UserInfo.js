import React, { Component } from 'react';
import { Menu, Image, Statistic, Header, Icon  } from 'semantic-ui-react';

class UserInfoCard extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name:{
          first: '',
          last: ''
        },
        picture: {
          thumbnail: ''
        }
      }
    }
  }

  componentDidMount(){
    fetch('https://randomuser.me/api/').then(response => {
      return response.json();
    }).then(data => {
      this.setState({ userInfo: data.results[0] });
    })
  }

  render(){
    const  { userInfo } = this.state;
    const { includeSettingIcon } = this.props;

    return (
      <div className="main-user-info">
        <img className="user-image" src={userInfo.picture.thumbnail} />
        <span className="user-name">{userInfo.name.first} {userInfo.name.last}</span>
        {includeSettingIcon && <Icon  size="large" name="setting" />}
      </div>
    )
  }
}

export default UserInfoCard;