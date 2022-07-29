import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/function";
import Welcome from "./Components/class";
import Hello from "./Components/hello";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Greet name="Roma" heroName="Girl">
          <p>This is Practice React Js</p>
        </Greet>
        <Greet name="Diyh" heroName="Girl">
          <button>Click Here</button>
        </Greet>

        <Welcome name="Roma" heroName="Girl" />
        <Welcome name="Diyh" heroName="Girl" />
        {/* <Hello /> */}
      </div>
    );
  }
}

export default App;
