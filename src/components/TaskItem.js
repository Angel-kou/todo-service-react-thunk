import React from 'react';
import { Link } from 'react-router';

class TaskItem extends React.PureComponent {
  render() {
    const task = this.props.item;

    return (
      <div id="taskItem">
        <li className="list-group-item">{task.content}</li>
      </div>
    );
  }
}

export default TaskItem;
