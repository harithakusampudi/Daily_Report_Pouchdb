import {saveDoc,deleteDoc} from './helpers'

export default class Task {
    static addTask (data) {
      let list = []
      let response=saveDoc('dummyDB',data.data)
      .then(function(response){
         list=response
         return list
        })
        return response
    }
    static deleteTask (data) {
        let list = []
        let response=deleteDoc('dummyDB',data)
        .then(function(response){
           list=response
           return list
          })
          return response
      }
}