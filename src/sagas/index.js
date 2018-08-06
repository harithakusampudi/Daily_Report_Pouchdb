
import taskAddSaga from './addTask'
import taskDeleteSaga from './deleteTask'
import hourlyList from './hourlyList'
import updateSaga from './update'
import getLIst from './getTaskList'

export default function * root () {
    yield [
        taskAddSaga(),
        taskDeleteSaga(),
        hourlyList(),
        // updateSaga(),
        getLIst()
    ]
}