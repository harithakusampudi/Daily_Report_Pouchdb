import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { 
    addTask,
    editTask,
    editInputTask,
    deleteTask } from '../../modules';

import TaskManager from './component'

const mapStateToProps = (state) => {
    return {
        list: state
    }
}
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(
      {
        addTask,
        editTask,
        editInputTask,
        deleteTask
      },
      dispatch
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskManager)
