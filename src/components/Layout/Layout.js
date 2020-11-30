import React from 'react';
import Aux from '../../hoc/Auxs';
import Task from '../../containers/Tasks/Tasks';

 const layout =(props)=>(
     <Aux>
            <main>
                <Task></Task>
            </main>
    </Aux>

 );

 export default layout;