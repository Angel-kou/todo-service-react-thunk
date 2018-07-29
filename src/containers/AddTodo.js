import React from 'react'
import { connect } from 'react-redux'
import {addTodo, toggleTodo} from '../actions'

class AddTodo extends React.PureComponent{

    render(){
        let input;
        return(
            <div className="dialog">

                    <input type="text" className="form-control" placeholder="想说点什么" aria-label="Username"
                       aria-describedby="basic-addon1" ref={node => input = node} />

                    <button type="button" className="btn btn-primary" onClick={() => {
                        if (!input.value.trim()) {
                            return
                        }
                        this.props.add(input.value);
                        input.value = ''
                    }}>Save Task</button>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    add: value => dispatch(addTodo(value))
})

export default connect(null,mapDispatchToProps)(AddTodo)
