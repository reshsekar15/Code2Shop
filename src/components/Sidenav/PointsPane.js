import React, { Component } from 'react';
import { Tab } from 'semantic-ui-react';

class PointsPane extends Component{


  render() {
    return(
      <Tab.Pane className="set-min-tab-height">
        <div className="completed-challenges">
          <span>21</span>
          <span>Challenges Completed!</span>
        </div>
      </Tab.Pane>
      
    )
  }
}

export default PointsPane;