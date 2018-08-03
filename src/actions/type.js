import { types } from '../Constants/types'

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
    console.log("del",data);
    return {
    type:types.DEL_TASK,
    data
}
}
export const getTaskList =(data)=>({
    type:types.FETCH_TASK_LIST,
    data
})