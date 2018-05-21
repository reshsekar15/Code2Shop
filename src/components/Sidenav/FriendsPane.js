import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';
import UserInfoCard from './UserInfo';

class FriendsPane extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        name: {
          first: '',
          last: ''
        },
        picture: {
          thumbnail: ''
        }
      }
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/').then(response => {
      return response.json();
    }).then(data => {
      this.setState({ userInfo: data.results[0] });
    })
  }

  render() {

    return (
      <Tab.Pane className="set-min-tab-height">
      </Tab.Pane>
    )
  }
}

export default FriendsPane;