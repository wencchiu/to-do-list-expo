import { ADD_TODO, DELETE_TODO } from "./actions";

const initialState = {
    task: '',
    taskList: ['sss']
}

export default const todoApp = ( state = initialState, action ) => {
    switch(action.type){
        case ADD_TODO:
            return Object.assign({}, state, {
                taskList: [ ...state.taskList,task ]
            } ),

        case DELETE_TODO:
            return state,


        default: 
            return state,
    }

    
}