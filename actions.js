export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (task) => { type: ADD_TODO, task };
export const deleteTodo = (index) => { type: DELETE_TODO, index };