import React from 'react';
import ListItem from './ListItem';

class TodoList extends React.PureComponent {
  componentDidMount() {
    fetch('/api/todos', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      method: 'GET'
    })
      .then(data => {
        return data.json();
      })
      .then(json => this.props.getList(json));
  }

  render() {
    const todos = this.props.todos;
    console.log(todos);
    return (
      <ul>
        {todos.map(todo => (
          <ListItem
            item={todo}
            key={todo.id}
            onclick={() => {
              this.props.toggle(todo.id);
            }}
            ondblclick={() => {
              this.props.editChange(todo.id);
            }}
            changeItenValue={() => {
              this.props.valueChange(todo.id);
            }}
          />
        ))}
      </ul>
    );
  }
}

export default TodoList;
