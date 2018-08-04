import {saveDoc,deleteDoc,updateDoc,sortDoc} from './helpers'

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
      static editTask (data) {
        let list = []
        let response=updateDoc('dummyDB',data)
        .then(function(response){
           list=response
           return list
          })
          return response
      }
}