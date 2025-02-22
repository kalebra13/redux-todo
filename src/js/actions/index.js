import {
  ADD_CATEGORY,
  DELETE_CATEGORY,
  SET_ACTIVE_CATEGORY,
  ADD_TODO,
  TOGGLE_TODO_STATUS,
  TOGGLE_MODAL_OPEN,
  TOGGLE_MODAL_SAVE,
  TOGGLE_MODAL_CLOSE,
  SET_ACTIVE_TODO,
  CHANGE_ACTIVE_TITLE
} from "../constants/action-types";

export function addCategory(payload) {
  return { type: ADD_CATEGORY, payload };
}

export function deleteCategory(payload) {
  return { type: DELETE_CATEGORY, payload };
}

export function setActiveCategory(payload) {
  return { type: SET_ACTIVE_CATEGORY, payload };
}

export function addTodo(payload) {
  return { type: ADD_TODO, payload };
}

export function toggleTodoStatus(payload) {
  return { type: TOGGLE_TODO_STATUS, payload };
}

export function toggleModalOpen(id, title) {
  return { type: TOGGLE_MODAL_OPEN, payload: {id, title} };
}

export function toggleModalSave() {
  return { type: TOGGLE_MODAL_SAVE };
}

export function toggleModalClose() {
  return { type: TOGGLE_MODAL_CLOSE };
}

export function setActiveTodo(payload) {
  return { type: SET_ACTIVE_TODO, payload };
}

export function changeActiveTitle(payload) {
  return { type: CHANGE_ACTIVE_TITLE, payload };
}
