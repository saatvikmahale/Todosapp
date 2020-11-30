import React, { useState,useRef} from 'react';
import Aux from '../../hoc/Auxs';
import classes from './TaskCreator.module.css';

import ErrorMessage from '../ErrorMessage/errorMessage';

const TaskCreator =React.memo((props)=>{

    const [taskName,updateState]=useState('');
    const cleareText=useRef(null);

    const sendTaskData=()=>{
        cleareText.current.value='';
        if(taskName!==''){
            props.click(taskName);
        }
    };
  
    const updateCurrentState=(event)=>{
        updateState(event.target.value)
    }

    let errorMessge=null;
    if(props.error){
        errorMessge = <ErrorMessage></ErrorMessage>
    }

    return(
    <Aux>
       <div className={classes.MuiGridContainer}>
        <h1>Todos</h1>
        <div className ={classes.SearchContainer}>
            <input type="text" 
             onChange ={(event)=>updateCurrentState(event)}
             className={classes.input}
              name="task"
              ref={cleareText}
             placeholder ="Add your task" />
             
            <button
                 className={classes.Button} 
                 onClick={()=>sendTaskData()}>
            <span>
                <svg className={classes.SvgIcon} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z">
                </path>
                </svg>
            </span>
            <span className={classes.MuiTouchRipple}></span>
            </button>
        </div>
        {errorMessge}
      </div>

      
    
    </Aux> 
    )  
});

export default TaskCreator;