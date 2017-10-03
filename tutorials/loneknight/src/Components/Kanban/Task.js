import React, { Component } from "react";
import { DragSource } from "react-dnd";

import { ItemTypes } from "./Constants";

const taskSource = {
  beginDrag(props) {
    const { id, position, title, text } = props;
    return { id, position, title, text };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Task extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div className="Task">
        <span>
          <b>
            #{this.props.id} {this.props.title} - {" "}
          </b>
          {this.props.text}
        </span>
      </div>
    );
  }
}

export default DragSource(ItemTypes.TASK, taskSource, collect)(Task);
