import React, { Component } from "react";
import { DropTarget } from "react-dnd";

const containerTarget = {
  drop(props, monitor) {
    props.onDrop(console.log(monitor.getItem()));
  }
};

class Container extends Component {
  render() {
    return (
      <div className="container">
        <h3>
          {this.props.title}
        </h3>
        <hr />
        {this.props.cards}
      </div>
    );
  }
}

export default DropTarget("CARD", containerTarget, (connect, monitor) => ({}))(
  Container
);
