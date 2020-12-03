import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TaskCreator from './TaskCreator';
import ErrorMessage from '../ErrorMessage/errorMessage';

configure({adapter: new Adapter()});

let wrapper;
beforeEach(()=>{
     wrapper= shallow(<TaskCreator/>);
})

describe('<TaskCreator>',()=>{
    it('Should show error message on error',()=>{
        wrapper.setProps({error:true})
        expect(wrapper.find(ErrorMessage)).toHaveLength(1);
    });

    it('Should not show error message on error',()=>{
        wrapper.setProps({error:false})
        expect(wrapper.find(ErrorMessage)).toHaveLength(0);
    });

})