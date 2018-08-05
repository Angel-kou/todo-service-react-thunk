import React from 'react';
import { connect } from 'react-redux';
import { addTodo, addTodoTask, toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

class AddTodo extends React.PureComponent {
  render() {
    let input;
    {
      const b = 1 + 2;
    }

    return (
      <div className="dialog">
        <input
          type="text"
          className="form-control"
          placeholder="想说点什么"
          aria-label="Username"
          aria-describedby="basic-addon1"
          ref={node => (input = node)}
        />

        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Add Todo
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Add Task
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control alert-primary"
                  aria-label="Text input with checkbox"
                  ref="taskContent"
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-dismiss="modal"
                  onClick={() => {
                    if (!input.value.trim()) {
                      return;
                    }
                    this.props.add(input.value, this.refs.taskContent.value);
                    input.value = '';
                  }}
                >
                  Save Task
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  add: (value, content) => {
    fetch('/api/todos', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: localStorage.getItem('token')
      },
      method: 'POST',
      body: JSON.stringify({
        content: value,
        completed: false,
        readonly: true,
        tasks: [
          {
            content: content
          }
        ]
      })
    })
      .then(data => {
        return data.text();
      })
      .then(json => {
        console.log('json--111--' + json),
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
            .then(json => {
              console.log('json--111--' + json),
                // this.props.add(json)
                dispatch(addTodoTask(json));
            });
      });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
