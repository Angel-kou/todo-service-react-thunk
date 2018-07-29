import React from 'react'
import { connect } from 'react-redux'
import {addTodo, toggleTodo} from '../actions'
import TodoList from "../components/TodoList";

// const AddTodo = ({ dispatch }) => {
//     console.log("props ---------- ",dispatch);
//     let input;
//     return(
//         <div className="dialog">
//             <div>
//                 <h3>Task</h3>
//                 <input type="text" ref={node => input = node} placeholder="想说点什么" />
//             </div>
//             <div>
//                 <input type="button" value="Save Task" onClick={() => {
//                     console.log("value is 11111:",input.value)
//                     if (!input.value.trim()) {
//                         return
//                     }
//                     console.log("value is :",input.value)
//                     dispatch(addTodo(input.value))
//                     input.value = ''
//                 }} />
//             </div>
//         </div>
//     )
//
// }

class AddTodo extends React.PureComponent{

    render(){
        let input;
        return(
            <div className="dialog">
                <div>
                    <h3>Task</h3>
                    <input type="text" ref={node => input = node} placeholder="想说点什么" />
                </div>
                <div>
                    <input type="button" value="Save Task" onClick={() => {
                        if (!input.value.trim()) {
                            return
                        }
                        console.log("value is :",input.value)
                        this.props.add(input.value);
                        input.value = ''
                    }} />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    add: value => dispatch(addTodo(value))
})

export default connect(null,mapDispatchToProps)(AddTodo)
