import { connect } from 'react-redux';
import {
  changeEditStatus,
  changeInputValue,
  getToDoList,
  toggleTodo
} from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = state => ({
  todos:
    state.todo.text == ''
      ? state.todo.list
      : state.todo.list.filter(
          item => item.content.indexOf(state.todo.text) !== -1
        )
});

const mapDispatchToProps = dispatch => ({
  toggle: id => dispatch(toggleTodo(id)),
  editChange: id => dispatch(changeEditStatus(id)),
  valueChange: (id, text) => dispatch(changeInputValue(id, text)),
  getList: json => dispatch(getToDoList(json))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
