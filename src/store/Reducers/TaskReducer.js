
import * as actionType from '../Actions/actions'

const initialState = {
    taskDetailsData: [],
    error:null
};


const taskReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionType.SET_TASKS:
         return {
             taskDetailsData:action.taskData,
             error:state.error
         };
        
        case actionType.CREATE_TASK:
            return{
                ...state,
                
                taskDetailsData:state.taskDetailsData.concat({name:action.taskDetail.name,id:action.taskDetail._id,completed:action.taskDetail.completed})
            };

         case actionType.UPDATE_TASKS:
            return{
                ...state,
                taskDetailsData:state.taskDetailsData.map((mp)=>{
                    if(mp.id===action.taskData.id){
                        mp.completed=action.taskData.completed;
                    }
                    return mp;
                })
            };

        case actionType.DELETE_TASK:
            return{
                ...state,
                taskDetailsData : state.taskDetailsData.filter((task)=>task.id!== action.id)
            };

        case actionType.GET_ACTIVE_TASKS:
            return state.taskDetailsData.filter((task)=>!task.completed);

        case actionType.GET_ALL_TASKS:
            return state.taskDetailsData;
                

        case actionType.GET_COMPELTED_TASKS:
            return state.taskDetailsData.filter((task)=>task.completed);
        
        default:
          return state;
        }
};


export default taskReducer;
