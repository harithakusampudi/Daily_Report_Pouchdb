
import { put, takeLatest,call } from 'redux-saga/effects'

import { types } from '../constants/types'
import Task from '../requests/taskData'
import { fetchMonthlyList } from '../modules/report';

export function * handleHourlyReport(data){
    console.log("logmonth",data);
    // const hourlyList = yield call(Task.editTask,data.date)
    // yield put(fetchMonthlyList(hourlyList))
}

export default function * hourlyReport(){
    yield [
        takeLatest(types.GET_HOURLY,handleHourlyReport)
    ]
}