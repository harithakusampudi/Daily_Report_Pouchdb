import { put, takeEvery,call } from 'redux-saga/effects'

import {types} from '../constants/types'
import { getTaskList } from '../modules/task'
import  Task from '../requests/taskData'


export function* handleTaskSaga(data){
    console.log("getliiii");
    
    const taskList=yield call(Task.getList,data)
    console.log("getlist",taskList);
    
    yield put(getTaskList(taskList))
}

export default function* taskListSaga(){
    console.log("getli");
    
    yield takeEvery(types.GET_LIST,handleTaskSaga)
}