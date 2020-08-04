export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = (todo) => { type: ADD_TODO, todo };
export const deleteTodo = (taskNum) => { type: DELETE_TODO, taskNum };