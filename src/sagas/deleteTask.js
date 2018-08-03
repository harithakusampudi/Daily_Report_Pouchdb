
import { put, takeLatest,call } from 'redux-saga/effects'
import  task from '../requests/taskData'
import { getTaskList } from '../actions/type'
import { types } from '../Constants/types'

export function * handleTaskSaga(data){
    const taskList = yield call(task.deleteTask,data)
    yield put(getTaskList(taskList))
}

export default function * taskDeleteSaga(){
    console.log("del");
    yield [
        takeLatest(types.DEL_TASK,handleTaskSaga)
    ]
}