import { delay } from 'redux-saga'
import { put, takeEvery,call } from 'redux-saga/effects'
import  task from '../requests/taskData'
import { getTaskList } from '../actions/type'

export function* handleTaskSaga(data){
    const taskList=yield call(task.addTask,data)
    console.log("fds",taskList);
    yield put(getTaskList(taskList))
}

export default function* taskAddSaga(){
    console.log("tasksaga");
    yield takeEvery('ADD_TASK',handleTaskSaga)
}