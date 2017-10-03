import React, { Component } from "react";
import { DragSource } from "react-dnd";

const cardSource = {
  beginDrag(props) {
    return {
      id: props.id,
      index: props.index
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      console.log(`Dropped ${item.name} into ${dropResult.name}`);
    } else {
      console.log("No drop result");
    }
  }
};

class Card extends Component {
  render() {
    const { isDragging, connectDragSource } = this.props;
    const { id } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    return connectDragSource(
      <div className="card" style={{ ...opacity }}>
        Card {id}
      </div>
    );
  }
}

export default DragSource("CARD", cardSource, (connect, monitor) => {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
})(Card);
