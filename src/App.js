import React, { Component } from "react";
import "./App.css";
import Parent from "./components/Parent";

class App extends Component {
  render() {
    return (
      <div className="App-header ">
        <div id="container" className="formContainer">
          <h1 className="page-header">Love Calculator</h1>
          <div className="forms col-6">
            <Parent />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
