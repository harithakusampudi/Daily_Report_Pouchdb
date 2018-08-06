
import {types} from '../constants/types'

export const getWeeklyList =(date)=>({
    type:types.GET_WEEKLY,
    date:date
})

export const fetchWeeklyList=(list)=>{
    return {
        type:types.FETCH_WEEKLY,
        list:list
    }
}

export const getMonthlyList =(date)=>({
    type:types.GET_MONTHLY,
    date:date
})

export const fetchMonthlyList=(list)=>{
    return {
        type:types.FETCH_MONTHLY,
        list:list
    }
}

export const getHourlyList =(date)=>({
    type:types.GET_HOURLY,
    date:date
})

export const fetchHourlyList=(list)=>{
    return {
        type:types.FETCH_HOURLY,
        list:list
    }
}


const initialState={
    weeklyList:[],
    monthlyList:[],
    hoursList:[]
}

const report =(state = initialState, action) => {
    switch (action.type) {
      case types.FETCH_TASK_LIST: {
        return state
      }
      default :
      return state
    }
}
export default report