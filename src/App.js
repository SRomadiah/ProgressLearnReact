import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Function";
import Welcome from "./Components/Class";
import Hello from "./Components/Hello";
import Messages from "./Components/Messages";
import Card from "./Components/Card";
import Count from "./Components/Count";
import FunctionClick from "./Components/FunctionClick";
import ClassClick from "./Components/ClassClick";
import EventBind from "./Components/EventBind";
import ParentsComponent from "./Components/ParentsComponent";
import StateProps from "./Components/StateProps/State";
import UserGreeting from "./Components/UserGreeting";
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <UserGreeting /> */}
        {/* <ParentsComponent /> */}
        {/* <EventBind /> */}
        {/* <FunctionClick /> */}
        {/* <ClassClick /> */}
        {/* <Count /> */}
        {/* <Messages /> */}
        {/* <Card name="Romadiah" number={3} /> */}

        {/* <Greet name="Roma" heroName="Girl">
          <p>This is Practice React Js</p>
        </Greet>
        <Greet name="Diyh" heroName="Girl">
          <button>Click Here</button>
        </Greet> */}

        {/* <Welcome name="Roma" heroName="Girl" />
        <Welcome name="Diyh" heroName="Girl" /> */}
        {/* <Hello /> */}
        {/* <StateProps /> */}
      </div>
    );
  }
}

export default App;
