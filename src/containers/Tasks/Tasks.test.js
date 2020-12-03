import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {Tasks} from './Tasks';
import TaskCreator from '../../components/TaskCreator/TaskCreator';
import ShowTasks from '../../components/ShowTasks/ShowTasks';
import { beforeEach } from 'jest-circus';

configure({adapter: new Adapter()});

describe('<Tasks>',()=>{

    let wrapper;
    beforeEach(()=>{
         wrapper= shallow(<Tasks/>);
    });

    it('Should render one <TaskCreator/> element and  one <ShowTasks>',()=>{
        wrapper= shallow(<Tasks/>);
        wrapper.setProps({tasks:[]})
        expect(wrapper.find(TaskCreator)).toHaveLength(1);
        expect(wrapper.find(ShowTasks)).toHaveLength(1);
    });

})