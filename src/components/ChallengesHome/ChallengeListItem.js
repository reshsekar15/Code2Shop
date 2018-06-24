import React, { Component } from 'react';
import { Segment, Label, Icon } from 'semantic-ui-react';

class ChallangeListItem extends Component {
  state = {}

  navigateToChallenge(link) {
    const { history } = this.props;
    console.log(this.props);

    history.push(link);
  }

  render() {
    const {
      challengesLink,
      levelColor,
      levelName,
      challangeText,
      isComplete
    } = this.props;

    return (
      <Segment className="clickable" onClick={() => this.navigateToChallenge(challengesLink)}>
        <span className="challenges-content">
          <Label color={levelColor} ribbon>
            {levelName}
          </Label>
          <span className="challenges-name">{challangeText}</span>
          {!isComplete && <Icon className="challenges-icon" name="trophy" size="large" />}
          {isComplete && (
            <div className="challenges-icon">
              <Icon style={{ display: 'inline' }} name="trophy" color="yellow" size="large" />
              <span className="complete-text">
                Complete!
              </span>
            </div>)}
        </span>
      </Segment>

    );
  }
}

export default ChallangeListItem;
