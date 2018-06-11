import React, { Component } from 'react';
import { Segment, Label, Icon } from 'semantic-ui-react';

class ChallangeListItem extends Component {
  state = {}
  render() {
    const {
      challengesLink,
      levelColor,
      levelName,
      challangeText,
      isComplete
    } = this.props;

    return (
      <Segment>
        <a href={challengesLink} className="challenges-content">
          <Label as="a" color={levelColor} ribbon>
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
        </a>
      </Segment>

    );
  }
}

export default ChallangeListItem;
