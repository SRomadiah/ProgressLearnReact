import React, { Component } from "react";

class Messages extends Component {
  constructor() {
    super();
    this.state = {
      messages: "Welcome Visitors",
    };
  }
  changeMessages() {
    this.setState({
      messages: "Thank You For Subscribing",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.messages}</h1>
        <button onClick={() => this.changeMessages()}>Subscribe</button>
      </div>
    );
  }
}

export default Messages;
