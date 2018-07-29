import React from 'react'
import AddTodo from '../containers/AddTodo'
import ShowTodoList from '../containers/ShowTodoList'
import SearchTodo from "../containers/SearchTodo";
import User from "./User";

const App = () => (
  <div>
      <User/>
      <ShowTodoList />
      <AddTodo />
      <SearchTodo/>
  </div>
)

export default App