import React from 'react';
import Aux from '../../../hoc/Auxs';
import classes from './Task.module.css';


const task =(props)=>{

    const markCompleted=id=>{
        props.markCompleted(id);
    }

    const deleteTask =id=>{
        props.deleteTask(id);
    }

    let compelteDutton =null;
    if(!props.completed){
        compelteDutton = (
        <button onClick={()=>markCompleted(props.taskid)} className={[classes.ActiveTaskControl,classes.MuiIconButtoncolorPrimary].join(' ')}>
        <span className={classes.IconButtonLable}>
            <svg className={classes.SVGIconRoot} focusable="false" viewBox="0,0,24,24" aria-hidden="true">
             <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>
            </svg>
        </span>
        </button>
    )
}
    
  
    return(
        <Aux>
                <div key={props.taskid} className={[classes.MUIContainer,classes.TaskInnerContainer].join(' ')}>
                    <div className={classes.TaskName}>
                        {props.name}
                    </div>
                    
                    <div className={[classes.MUIContainer,classes.ControlsContainer].join(' ')}> 
                        {compelteDutton}
                        <button onClick={()=>deleteTask(props.taskid)} className={[classes.ActiveTaskControl,classes.MuiIconButtoncolorSecondary].join(' ')}>
                            <span className={classes.IconButtonLable}>
                                <svg className={classes.SVGIconRoot} focusable="false" viewBox="0,0,24,24" aria-hidden="true">
                                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path>
                                </svg>
                            </span>
                        </button>
                </div>
                </div>
        </Aux>
    )

};

export default task;