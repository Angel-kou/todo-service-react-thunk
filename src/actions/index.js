let nextTodoId = 0;

export const addTodo = (text, content) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  text,
  content
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});

export const changeEditStatus = id => ({
  type: 'CHANGE_EDIT_STATUS',
  id
});

export const changeInputValue = (id, text) => ({
  type: 'CHANGE_INPUT_VALUE',
  id,
  text
});

export const getToDoList = json => ({
  type: 'GET_TODO_LIST',
  json
});

export const searchTodo = text => ({
  type: 'SEARCH_TO_DO',
  text
});

export const addTodoTask = json => ({
  type: 'ADD_TODO_TASK',
  json
});
