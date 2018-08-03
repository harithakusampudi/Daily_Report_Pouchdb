const initialState = []

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TASK_LIST': {
      console.log("data",action.data);
      return action.data
    }
    case 'EDIT_VALUE': {
      const index = action.data.i
      if(action.data.change==='proj')
      state[index].project = action.data.value
      else if(action.data.change==='type')
      state[index].type = action.data.value
     
      return new Array(...state);
    }
    case 'INPUT_CHANGE': {
      const index = action.data.index
      if(action.data.change === 'task')
      state[index].task = action.data.changevalue
      if(action.data.change === 'hour')
      state[index].hour = action.data.changevalue
      return new Array(...state) ;
    }
    default:
      return state;
  }

}

export default Reducer;