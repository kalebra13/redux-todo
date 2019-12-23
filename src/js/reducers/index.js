import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  SET_ACTIVE_CATEGORY,
  ADD_TODO,
  TOGGLE_TODO_STATUS,
  TOGGLE_MODAL_OPEN,
  TOGGLE_MODAL_CLOSE,
  SET_ACTIVE_TODO
} from "../constants/action-types";

const initialState = {
  todos: [],
  activeCategoryID: null,
  categories: [],
  isOpenEditModal: false,
  activeTodoID: null,
  activeTodoTitle: ""
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
      return {
        ...state,
        activeCategoryID: null,
        categories,
        todos
      };
    }
    case SET_ACTIVE_CATEGORY: {
      return { ...state, activeCategoryID: action.payload };
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
          isDone: !item.isDone
        };
      });
      return { ...state, todos };
    }
    case SET_ACTIVE_TODO: {
      return {
        ...state,
        activeTodoID: action.payload.id,
        activeTodoTitle: action.payload.title
      };
    }
    case TOGGLE_MODAL_OPEN: {
      return {
        ...state,
        isOpenEditModal: true,
        activeTodoID: action.payload.id,
        activeTodoTitle: action.payload.title
      };
    }
    case TOGGLE_MODAL_CLOSE: {
      const todos = state.todos.map(item => {
        if (item.todoID !== state.activeTodoID) {
          return item;
        }
        return {
          ...item,
          todoTitle: action.payload.title
        };
      });

      return {
        ...state,
        isOpenEditModal: false,
        activeTodoID: null,
        activeTodoTitle: "",
        todos
      };
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
