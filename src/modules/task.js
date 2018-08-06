import {types} from '../constants/types'


export const addTask = (data) => {
     return {
    type:types.ADD_TASK, 
    data
}
}

export const editTask = (data) => ({
     type:types.EDIT_VALUE, 
     data
    })
export const editInputTask = (data) => ({
    type:types.EDIT_INPUT, 
    data
    })
export const deleteTask=(data)=>{
    return {
        type:types.DELETE_TASK,
        data
    }
}
export const getTaskList =(data)=>({
    type:types.FETCH_TASK_LIST,
    data
})

export const getLIst=()=>{
    return{
        type:types.GET_LIST
    }
}
const initialState = []

const task = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASK_LIST: {
      return action.data
    }
    case types.EDIT_VALUE: {
      const index = action.data.i
      if(action.data.change==='proj')
      state[index].project = action.data.value
      else if(action.data.change==='type')
      state[index].type = action.data.value
     
      return new Array(...state);
    }
    case types.INPUT_CHANGE: {
      const index = action.data.index
      if(action.data.change === 'task')
      state[index].task = action.data.changevalue
      if(action.data.change === 'hour')
      state[index].hour = action.data.changevalue
      return new Array(...state) ;
    }
    default:
      return state;
  }

}

export default task;
