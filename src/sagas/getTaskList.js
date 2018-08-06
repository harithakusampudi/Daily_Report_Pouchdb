import { put, takeEvery,call } from 'redux-saga/effects'

import {types} from '../constants/types'
import { getTaskList } from '../modules/task'
import  Task from '../requests/taskData'


export function* handleTaskSaga(data){
    const taskList=yield call(Task.getList,data)
    yield put(getTaskList(taskList))
}

export default function* taskListSaga(){
    yield takeEvery(types.GET_LIST,handleTaskSaga)
}