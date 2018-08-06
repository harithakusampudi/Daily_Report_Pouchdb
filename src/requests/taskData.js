import {saveDoc,deleteDoc,updateDoc,sortDoc, getAllDocs,getWeeklyDocs} from './helpers'

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
            var newDoc={
                _rev:`${data.index._rev}`,
                hour:data.changevalue,
                _id:`${data.index._id}`
            }
        let response=updateDoc('dummyDB',newDoc)
        .then(function(response){
           list=response
           return list
          })
          return response
      }
      static getList () {
        let list = []
        let response=getAllDocs('dummyDB')
        .then(function(response){
           list=response
           return list
          })
          return response
      } 
}