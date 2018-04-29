import React, { Component } from 'react';

class AboutUsPage extends Component {
  constructor() {
    super();

    this.state = {
      script: ''
    }
  }

  render() {
    return (
      <div 
        style={{display:'flex', alignItems:'center',  justifyContent:'center'}}
        className="partnership-container set-min-height"
      >
        <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vSGbxq8pkHogVJI-rsHWSaybiPSd_jaRmFRW22h_rb2_Z6uoyki0I6kA_cOwaHh61ny_TcSGTy_tp0C/embed?start=true&loop=true&delayms=10000" frameborder="0" width="1080" height="800" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
      </div>
    )
  }
}

export default AboutUsPage;