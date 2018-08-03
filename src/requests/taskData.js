import {saveDoc,deleteDoc} from './helpers'

export default class Task {
    static addTask (data) {
      let list = []
      let response=saveDoc('dummy',data.data).then(function(response){
         list=response
         return list
        })
        return response
    }
    static deleteTask (data) {
        let list = []
        let response=deleteDoc('dummy',data.data).then(function(response){
           list=response
           return list
          })
          return response
      }
}