import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }
  render() {
    // if (this.state.isLoggedIn) {
    //   return (
    //     <div>
    //       <h1>Welcome Romie</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1>Hello Guest</h1>
    //     </div>
    //   );
    // }
    // return (
    //   <div>
    //     <div>
    //       <h1>Welcome Romie</h1>
    //     </div>
    //     <div>
    //       <h1>Hello Guest</h1>
    //     </div>
    //   </div>
    // );
  }
}

export default UserGreeting;
