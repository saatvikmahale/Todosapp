import React from 'react';
//import Aux from '../../hoc/Aux';
import classes from './ShowTasks.module.css';
import Task from './Task/Task';
//import * as actionType from '../../store/Actions/actions';
import * as actionHandler from '../../store/Actions/taskHandler';
import {connect} from 'react-redux';


export const ShowTasks =(props)=>{

    const markCompleted = id =>{
        props.updateTask({id:id,completed:true})
    }
    
    const deleteTask = id =>{
        props.deleteTask(id);
    }

    let taskData=[];
    if(props.taskType ===1 || props.taskType ===2){
        taskData =  props.tasks.filter((ft)=> {
            return (props.taskType ===1 && !ft.completed) ||  (props.taskType ===2 && ft.completed) ;
        });
    }else{
        taskData=props.tasks;
    }

    let TaskList;
    if(taskData.length>0){
        TaskList= 
           (taskData.map((mp)=>{
                return (
                    <div key={mp.id} className={[classes.MUIContainer,classes.TaskContainerPad].join(' ')}>
                        <Task taskid={mp.id}  completed={mp.completed}
                            markCompleted={markCompleted}  deleteTask={deleteTask}
                          name={mp.name}></Task>
                     </div>
                )
            })
           )}
    else{
        TaskList= ( <div className={[classes.MUIContainer,classes.TaskContainerPad].join(' ')}>
                     <div className={[classes.MUIContainer,classes.TaskContainer].join(' ')}>
                        <div className={classes.NoRecordFound}>
                           No Record Found.
                        </div> 
                     </div>
                    </div>
                )
    }
 

    return TaskList
        
};

const mapStateToProps =state=>{
    return {
        tasks: state.taskDetailsData
    }
}

 const mapDispatchToProps = dispatch =>{
     return {
         updateTask:(taskDetail)=> dispatch(actionHandler.updateTask(taskDetail)),
         deleteTask:(id)=> dispatch(actionHandler.deleteTask(id))
     }
 }

export default connect(mapStateToProps,mapDispatchToProps) (ShowTasks);