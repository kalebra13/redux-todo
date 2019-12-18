import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  SET_ACTIVE_CATEGORY,
  ADD_TODO,
  TOGGLE_TODO_STATUS
} from "../constants/action-types";

const initialState = {
  todos: [],
  activeCategory: null,
  categories: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CATEGORY: {
      return { ...state, categories: [...state.categories, action.payload] };
    }
    case DELETE_CATEGORY: {
      const categories = state.categories.filter(
        category => category.id !== action.payload
      );
      const todos = state.todos.filter(
        todo => todo.categoryID !== action.payload
      );
      console.log(action.payload);

      return {
        ...state,
        categories,
        todos: [...todos, todos]
      };
    }
    case SET_ACTIVE_CATEGORY: {
      return { ...state, activeCategory: action.payload };
    }
    case ADD_TODO: {
      return { ...state, todos: [...state.todos, action.payload] };
    }
    case TOGGLE_TODO_STATUS: {
      const todos = state.todos.map(item => {
        if (item.todoID !== action.payload.todoID) {
          return item;
        }
        return {
          ...item,
          ...action.payload
        };
      });
      return { ...state, todos };
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
