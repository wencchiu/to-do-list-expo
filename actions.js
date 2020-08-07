import firebase, { db, ref } from "./firebase.js";

export const UPDATE_TASK = "UPDATE_TASK";
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const FETCH_TODOS = "FETCH_TODOS";

export const updateTask = (text) => ({ type: UPDATE_TASK, text });
// export const addTodo = (task) => ({ type: ADD_TODO, task });
// export const deleteTodo = (index) => ({ type: DELETE_TODO, index });

export const addTodo = (task) => async (dispatch) => {
  ref
    .update({ taskList: firebase.firestore.FieldValue.arrayUnion(task) })
    .then(() => {
      console.log("addtodo");
    });
};

export const fetchTodos = () => async (dispatch) => {
  ref.onSnapshot((doc) => {
    dispatch({ type: FETCH_TODOS, data: doc.data() });
  });
};
