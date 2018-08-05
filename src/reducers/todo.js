const initialState = [
  {
    id: 0,
    content: 'Use Redux',
    completed: false,
    readOnly: true
  }
];

const todo = (state = { list: [], text: '' }, action) => {
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: action.id,
            content: action.text,
            completed: false,
            readOnly: true,
            tasks: []
          }
        ]
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        list: state.list.map(
          todo =>
            todo.id === action.id
              ? { ...todo, completed: !todo.completed }
              : todo
        )
      };
    case 'CHANGE_EDIT_STATUS':
      return {
        ...state,
        list: state.list.map(
          todo =>
            todo.id === action.id ? { ...todo, readOnly: !todo.readOnly } : todo
        )
      };
    case 'CHANGE_INPUT_VALUE':
      return {
        ...state,
        list: state.list.map(
          todo =>
            todo.id === action.id ? { ...todo, content: action.text } : todo
        )
      };
    case 'SEARCH_TO_DO':
      return {
        ...state,
        text: action.text
      };
    case 'GET_TODO_LIST':
      return {
        ...state,
        list: action.json
      };
    case 'ADD_TODO_TASK':
      return {
        ...state,
        list: action.json
      };

    default:
      return state;
  }
};

export default todo;
