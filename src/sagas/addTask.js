import { put, takeEvery,call } from 'redux-saga/effects'

import {types} from '../constants/types'
import { getTaskList } from '../modules'
import  Task from '../requests/taskData'


export function* handleTaskSaga(data){
    const taskList=yield call(Task.addTask,data)
    yield put(getTaskList(taskList))
}

export default function* taskAddSaga(){
    yield takeEvery(types.ADD_TASK,handleTaskSaga)
}