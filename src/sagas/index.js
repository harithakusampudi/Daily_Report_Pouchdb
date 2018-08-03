
import taskAddSaga from './addTask'
import taskDeleteSaga from './deleteTask'

export default function * root () {
    yield [
        taskAddSaga(),
        taskDeleteSaga()
    ]
    
}