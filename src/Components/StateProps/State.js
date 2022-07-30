import React, { Component } from "react";

class StateProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      food: "Burger",
    };
  }

  render() {
    return (
      <div>
        <h2>{this.state.food}</h2>
        <button onClick={() => this.setState({ food: "Pizza" })}>Others</button>
      </div>
    );
  }
}

export default StateProps;
