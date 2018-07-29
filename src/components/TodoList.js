import React from 'react'
import ListItem from './ListItem'
import { Link} from 'react-router'

class TodoList extends React.PureComponent {
    render() {
        const todos = this.props.todos;
        return (<ul>
            { todos.map(todo => (
                <Link to={{pathname:'detail',state:todo}}><ListItem
                    item={todo}
                    key={todo.id}
                    onclick={()=>{this.props.toggle(todo.id)}}
                    ondblclick = {()=>{this.props.editChange(todo.id)}}
                    changeItenValue = {()=>{this.props.valueChange(todo.id)}}
                /></Link>
            ))}
        </ul>)
    }
}

export default TodoList
