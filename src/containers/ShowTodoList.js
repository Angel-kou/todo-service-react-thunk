import { connect } from 'react-redux'
import {changeEditStatus, changeInputValue, toggleTodo} from '../actions'
import TodoList from '../components/TodoList'


const mapStateToProps = state => ({
    todos: state.todo.text == "" ? state.todo.list: state.todo.list.filter(item => item.content == state.todo.text)
})

const mapDispatchToProps = dispatch => ({
    toggle: id => dispatch(toggleTodo(id)),
    editChange : id => dispatch(changeEditStatus(id)),
    valueChange : (id,text) => dispatch(changeInputValue(id,text)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
