import * as actionType from '../Actions/actions';
import axios from '../../Axios/axiosTask'

// export const createTask = detail=>{
//     return {
//         type:actionType.CREATE_TASK,
//         taskDetail:detail
//     }
// };

const setTasks= details=>{
    let data=[];
    if(details.length>0){
        details.forEach(element => {
            data.push({name:element.name,id:element._id,completed:element.completed})
        });
    }else{
        data=details;
    }
    return{
        type:actionType.SET_TASKS,
        taskData:data
    }
}

const createLocalTask= detail=>{
    return{
        type:actionType.CREATE_TASK,
        taskDetail:detail
    }
}

const updateLocalTask= detail=>{
    return{
        type:actionType.UPDATE_TASKS,
        taskData:{name:detail.name,id:detail._id,completed:detail.completed}
    }
}

const deleteLocalTask= id=>{
    return{
        type:actionType.DELETE_TASK,
        id:id
    }
}

export const initTask =()=>{
    return dispatch=>{
        axios.get('http://localhost:5040/allTasks').then(resp=>{
            dispatch(setTasks(resp.data));
        }).catch(error=>{
            console.log(error);
        });
    }
}

export const createTask =(taskDetail)=>{
        return dispatch=>{
            axios.post('http://localhost:5040/task/',taskDetail).then(resp=>{
                dispatch(createLocalTask(resp.data));
            }).catch(error=>{
                console.log(error);
            });
    }
}

 export const updateTask =(taskDetail)=>{
         return dispatch=>{
             axios.patch('http://localhost:5040/task/'+taskDetail.id,{completed:taskDetail.completed}).then(resp=>{
                 dispatch(updateLocalTask(resp.data));
             }).catch(error=>{
                 console.log(error);
             });
     }
 }

 export const deleteTask =(id)=>{
        return dispatch=>{
            axios.delete('http://localhost:5040/task/'+id).then(resp=>{
                dispatch(deleteLocalTask(id));
            }).catch(error=>{
                console.log(error);
            });
        }
}