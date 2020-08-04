import { ADD_TODO, DELETE_TODO } from "./actions";

const initialState = {
    task: '',
    taskList: ['sss']
}

export default function todoApp( state = initialState, action ) {
    switch(action.type){
        case ADD_TODO:
            return Object.assign({}, state, {
                taskList: [ ...state.taskList, state.task ]
            } );

        case DELETE_TODO:
            const newTaskList = state.taskList.filter((item, index) => action.index !== index )
            return Object.assign({}, state, {
                taskList: [ ...newTaskList ]
            } );

        default: 
            return state;
    }

    
}
