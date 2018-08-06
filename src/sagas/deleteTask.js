
import { put, takeLatest,call } from 'redux-saga/effects'

import { types } from '../constants/types'
import { getTaskList } from '../modules/task'
import  Task from '../requests/taskData'

export function * handleTaskSaga(data){
    
    const taskList = yield call(Task.deleteTask,data.data)
    yield put(getTaskList(taskList))
}

export default function * taskDeleteSaga(){
    yield [
        takeLatest(types.DELETE_TASK,handleTaskSaga)
    ]
}