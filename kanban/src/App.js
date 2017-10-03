import React, { Component } from "react";
import HTML5Backend from "react-dnd-html5-backend";
import { DragDropContext } from "react-dnd";

import Card from "./Card.js";
import Container from "./Container";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container title="0" cards={<Card id="0" />} />
        <Container title="1" cards={<Card id="1" />} />
        <Container title="2" cards={<Card id="2" />} />
        <Container title="3" cards={<Card id="3" />} />
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
