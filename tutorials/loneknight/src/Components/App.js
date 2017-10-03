import React, { Component } from "react";

import "./App.css";
import Container from "./Kanban/Container";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Container</h3>
        <Container />
      </div>
    );
  }
}

export default App;
