import React, { Component } from "react";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import { connect } from "react-redux";

import * as actions from "../../Actions";
import Column from "./Column";
import Task from "./Task";

class Container extends Component {
  handleAddTaskClick() {
    this.props.addTask({
      id: Math.floor(Math.random() * 1000),
      position: [0, 0],
      title: "Example Task",
      text: "This is an example task"
    });
  }

  renderTask(task) {
    if (task.position) {
      const { id, title, text } = task;
      return <Task key={id} id={id} title={title} text={text} />;
    }
  }

  // Accepts an array of column names and will render a column for each
  renderColumns(columns) {
    return columns.map(column => {
      const { taskList, updateTask } = this.props;
      const colPosition = columns.indexOf(column);
      return (
        <Column
          key={colPosition}
          title={column}
          position={colPosition}
          taskList={taskList}
          updateTask={updateTask}
        >
          {taskList.map(task => {
            if (task.position && task.position[0] === colPosition) {
              return this.renderTask(task);
            }
          })}
        </Column>
      );
    });
  }

  render() {
    const columns = ["Todo", "Current", "Review", "Completed"];
    return (
      <div className="Container">
        <button onClick={() => this.handleAddTaskClick()}>Add Task</button>
        {this.renderColumns(columns)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  if (state.tasks.list) {
    return { taskList: state.tasks.list };
  }
  return { taskList: [] };
}

export default connect(mapStateToProps, actions)(
  DragDropContext(HTML5Backend)(Container)
);
