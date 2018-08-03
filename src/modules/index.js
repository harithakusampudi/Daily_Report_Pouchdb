import {types} from '../constants/types'


export const addTask = (data) => ({ 
    type:types.ADD_TASK, 
    data
})

export const editTask = (data) => ({
     type:types.EDIT_VALUE, 
     data
    })
export const editInputTask = (data) => ({
    type:types.INPUT_CHANGE, 
    data
    })
export const deleteTask=(data)=>{
    return {
        type:types.DEL_TASK,
        data
    }
}
export const getTaskList =(data)=>({
    type:types.FETCH_TASK_LIST,
    data
})

const initialState = []

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_TASK_LIST: {
      console.log("data",action.data);
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

export default Reducer;
