import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "hello",
    };
    // this.clickHandler = this.clickHandler.bind(this); {binding dalam class constructor}
  }

  // clickHandler() {
  //   this.setState({
  //     message: "Good Bye",
  //   });
  //   console.log(this);
  // }

  // menggunakan pendekatan pada properti sebagai arrow function
  clickHandler = () => {
    this.setState({
      message: "Good Bye",
    });
  };
  render() {
    return (
      <>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click Me</button> {binding dalam render/fungsi}  */}
        {/* <button onClick={() => this.clickHandler()}>Click Me</button> {binding dengan panah dalam render} */}
        <button onClick={this.clickHandler}>Click Me</button>
      </>
    );
  }
}
export default EventBind;
