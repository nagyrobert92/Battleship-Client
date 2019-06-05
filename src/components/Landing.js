import React, { Component } from "react";

import landingImage from "../images/battleship.jpeg";

class Landing extends Component {
  render() {
    return (
      <div>
        <img src={landingImage} alt="battleship" />
      </div>
    );
  }
}

export default Landing;
