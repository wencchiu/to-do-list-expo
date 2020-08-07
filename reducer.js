import { UPDATE_TASK, ADD_TODO, DELETE_TODO, FETCH_TODOS } from "./actions";

const initialState = {
  task: "",
  taskList: ["sss"],
};

export default function todoApp(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TASK:
      return Object.assign({}, state, {
        task: action.text,
      });

    case ADD_TODO:
      return Object.assign({}, state, {
        task: "",
        taskList: [...state.taskList, state.task],
      });

    case DELETE_TODO:
      const newTaskList = state.taskList.filter(
        (item, index) => action.index !== index
      );
      return Object.assign({}, state, {
        taskList: [...newTaskList],
      });

    case FETCH_TODOS:
      return action.data;

    default:
      return state;
  }
}
