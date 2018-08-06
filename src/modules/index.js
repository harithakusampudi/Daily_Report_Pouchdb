import { combineReducers } from 'redux'

import task from './task'
import report from './report'

export default combineReducers({
    task,
    report
  })