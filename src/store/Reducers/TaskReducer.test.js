import * as actionType from '../Actions/actions';
import TaskReducer from './TaskReducer';

describe('Task Reducer',()=>{

    let initialState;
    beforeEach(()=>{
        initialState= {
            taskDetailsData: [{id:'1',name:'Dev',completed:true}],
            error:null
        };
    });

    it('shoud return the initial state',()=>{
        expect(TaskReducer(undefined,{})).toEqual({
            taskDetailsData: [],
            error:null
        })
    });

    it('shoudd set task',()=>{
        expect(TaskReducer({
            taskDetailsData:[],
            error:null
        },{
            type:actionType.SET_TASKS,
            taskData:[{id:"1",name:'Dev',completed:true}, {id:"2",name:'UT',completed:false}]
        })).
        toEqual({
            taskDetailsData: [{id:"1",name:'Dev',completed:true}, {id:"2",name:'UT',completed:false}],
            error:null
        })
    });


    it('shoudd add task',()=>{
        expect(TaskReducer(initialState,{
            type:actionType.CREATE_TASK,
            taskDetail:{_id:'2',name:'test',completed:false}
        })).
        toEqual({
            taskDetailsData: [{id:'1',name:'Dev',completed:true}, {id:'2',name:'test',completed:false}],
            error:null
        })
    })

    it('delete task',()=>{
        expect(TaskReducer(initialState,{
            type:actionType.DELETE_TASK,
            id:'1'
        })).
        toEqual({
            taskDetailsData: [],
            error:null
        })
    });

    it('update task',()=>{
        expect(TaskReducer(initialState,{
            type:actionType.UPDATE_TASKS,
            taskData:{name:'Dev',id:'1',completed:false}
        })).
        toEqual({
            taskDetailsData: [{name:'Dev',id:'1',completed:false}],
            error:null
        })
    });


})