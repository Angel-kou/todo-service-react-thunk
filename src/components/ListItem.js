import React from 'react';
import {changeEditStatus} from "../actions";
import {changeInputValue} from "../actions";
import {toggleTodo} from "../actions";
import { Link} from 'react-router'



import PropTypes from 'prop-types'

class ListItem extends React.PureComponent {

    render(){

        const todo = this.props.item;

        let input;
        return (

            <li key={todo.id} className={todo.completed ? "todoLi2" : "todoLi1"}>

                <div className="input-group mb-3" id="list">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                            <input
                                type="checkbox"
                                aria-label="Checkbox for following text input"
                                id={todo.id}
                                checked={todo.completed}
                                onClick={this.props.onclick}
                            />
                        </div>
                    </div>
                    <Link to={{pathname:'detail',state:todo}}><input
                        type="text"
                        className="form-control"
                        aria-label="Text input with checkbox"
                        ref={node => input = node}
                        value={todo.content}
                        readOnly={todo.readOnly}
                        style={todo.completed ? {textDecoration: 'line-through'} : {}}
                        onDoubleClick={this.props.ondblclick}
                        onChange={()=>this.props.changeItenValue(todo.content)}
                    /></Link>
                </div>
            </li>
        );
    }

}

export default ListItem;
