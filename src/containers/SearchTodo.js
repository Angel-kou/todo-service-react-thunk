import { connect } from 'react-redux'
import {searchTodo} from '../actions'
import SearchItem from "../components/SearchItem";


const mapDispatchToProps = dispatch => ({
    search : (id,text) => dispatch(searchTodo(id,text)),
})

export default connect(null, mapDispatchToProps)(SearchItem)
