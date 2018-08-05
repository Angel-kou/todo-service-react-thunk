import React from 'react';
import AddTodo from '../containers/AddTodo';
import ShowTodoList from '../containers/ShowTodoList';
import SearchTodo from '../containers/SearchTodo';
import User from './User';
import '../App.css';
import Login from './Login';

const Todo = () => (
  <div className="container">
    <User />
    <div className="action">
      <AddTodo />
      <SearchTodo />
    </div>
    <ShowTodoList />
  </div>
);

export default Todo;
