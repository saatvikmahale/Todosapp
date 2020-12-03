import React, {useEffect,useState} from 'react';
import Aux from '../../hoc/Auxs';
import TaskCreator from '../../components/TaskCreator/TaskCreator';
import ShowTasks from '../../components/ShowTasks/ShowTasks';
import classes from './Tasks.module.css';
import {connect} from 'react-redux';

import * as taskHandler from '../../store/Actions/taskHandler'
//import task from '../../components/ShowTasks/Task/Task';

export const Tasks =(props)=>{

    const[errState,updateError] = useState('');
    const[taskTypeId,updateTaskType] = useState('');

    useEffect(()=>{
        props.initializeTasks();
        updateTaskType(0);
    },[]);

    const displayTask=(taskType)=>{
        updateTaskType(taskType);
    }
    
    const getTaskName=(taskName)=>{
        let checkDouplicate= props.tasks? props.tasks.find((tsk)=>{return tsk.name===taskName && !tsk.completed}):false;
        if(!checkDouplicate){
             const taskDetail = {name:taskName,completed:false}
             props.addTask(taskDetail);
             updateError(false);
        }else{
            updateError(true);
        }
    };

    return (
        <Aux> 
            <TaskCreator error={errState} click={getTaskName}></TaskCreator>
            <div className={classes.DisplayTaskContainer}>
                <div className={classes.DisplayTasks}>
                    <ShowTasks taskType={taskTypeId}></ShowTasks>
                <div className={classes.DisplayLinks}>
                    <div className ={classes.Item1}>
                        <div>All({props.tasks?props.tasks.length:0})</div>
                    </div>
                    <div className={classes.LinkItems}>
                        <button style={taskTypeId===0?{color:"blue"}:{color:"inherit"}} onClick={()=>displayTask(0)}>All</button>
                        <button style={taskTypeId===1?{color:"blue"}:{color:"inherit"}} onClick={()=>displayTask(1) }>Active</button>
                        <button style={taskTypeId===2?{color:"blue"}:{color:"inherit"}}  onClick={()=>displayTask(2) }>Completed</button>
                     </div>

                </div>
                </div>

            </div>
        </Aux>

    );

};

const mapStateToProps =state=>{
    return {
        tasks: state.taskDetailsData
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        addTask:(taskDetail)=> dispatch(taskHandler.createTask(taskDetail)),
        initializeTasks:()=> dispatch(taskHandler.initTask())
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Tasks);