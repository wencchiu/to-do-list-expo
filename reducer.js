import { ADD_TODO, DELETE_TODO } from "./actions";

const initialState = {
    task: "",
    taskNum: 0,
    todoList: [
        {
            taskNum:999,
            task: "yoooo",
        },

    ]
}

export default const todoApp = ( state = initialState, action ) => {
    switch(action.type){
        case ADD_TODO:
            return Object.assign({}, state, {
                todoList: {
                    ...state.todoList,
                    {
                        taskNum: todo.taskNum,
                        task: todo.task
                    }
                }
            } ),

        case DELETE_TODO:
            return state,


        default: 
            return state,
    }

    
}