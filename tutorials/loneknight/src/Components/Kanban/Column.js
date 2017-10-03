import React, { Component } from "react";
import { DropTarget } from "react-dnd";

import { ItemTypes } from "./Constants";

const columnTarget = {
  drop(props, monitor) {
    props.updateTask(monitor.getItem().id, monitor.getItem());
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class Column extends Component {
  render() {
    const { connectDropTarget } = this.props;
    return connectDropTarget(
      <div className="Column">
        <h4>
          {this.props.title} Column
        </h4>
        <hr />
        {this.props.children}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.TASK, columnTarget, collect)(Column);
