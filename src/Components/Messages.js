import React, { Component } from "react";

class Messages extends Component {
  constructor() {
    super();
    this.state = {
      messages: "Welcome Visitors",
    };
  }
  render() {
    return <h1>{this.state.messages}</h1>;
  }
}

export default Messages;
