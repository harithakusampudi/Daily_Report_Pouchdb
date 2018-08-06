
import { put, takeLatest,call } from 'redux-saga/effects'

import { types } from '../constants/types'
import { getTaskList } from '../modules'
import  Task from '../requests/taskData'

export function * handleTaskSaga(data){
    
    // const taskList = yield call(Task.hourlyList,data.data)
    // yield put(getTaskList(taskList))
}

export default function * updateSaga(){
    yield [
        takeLatest(types.EDIT_INPUT,handleTaskSaga)
    ]
}