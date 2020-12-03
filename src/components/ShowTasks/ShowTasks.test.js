import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {ShowTasks} from './ShowTasks';
import Task from './Task/Task';

configure({adapter: new Adapter()});

let tasks;
let type=0;

beforeEach(()=>{
     tasks=[{'id':'1',name:'Dev',completed:true},{'id':'2',name:'UT',completed:true},{'id':'3',name:'Test',completed:false}]
});

describe('<ShowTasks>',()=>{
    it('show all tasks',()=>{
        const wrapper= shallow(<ShowTasks tasks={tasks} taskType={0}/>);
        expect(wrapper.find(Task)).toHaveLength(3);
    });
    it('show acive tasks',()=>{
        const wrapper= shallow(<ShowTasks tasks={tasks} taskType={1}/>);
         expect(wrapper.find(Task)).toHaveLength(1);
     });

    ('show completed tasks',()=>{
        const wrapper= shallow(<ShowTasks tasks={tasks} taskType={2}/>);
         expect(wrapper.find(Task)).toHaveLength(2);
     });

     ('do not show taks',()=>{
        const wrapper= shallow(<ShowTasks tasks={[]} taskType={0}/>);
         expect(wrapper.find(Task)).toHaveLength(0);
     });
})