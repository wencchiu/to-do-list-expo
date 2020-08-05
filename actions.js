export const UPDATE_TASK = "UPDATE_TASK";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const updateTask = (text) => ({ type: UPDATE_TASK, text });
export const addTodo = (task) => ({ type: ADD_TODO, task });
export const deleteTodo = (index) => ({ type: DELETE_TODO, index });
