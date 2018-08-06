import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { 
    addTask,
    editTask,
    editInputTask,
    deleteTask,
    getLIst } from '../../modules/task';

import {getMonthlyList} from '../../modules/report'

import TaskManager from './component'

const mapStateToProps = (state) => {
    return {
        list: state.task
    }
}
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        addTask,
        editTask,
        editInputTask,
        deleteTask,
        getLIst
      },
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskManager)
