import {saveDoc,deleteDoc,updateDoc,sortDoc, getAllDocs} from './helpers'

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
        console.log("taskedit",data);
        var doc={}
        // if(data.change==='hour'){
            var newDoc={
                hour:data.changevalue,
                _rev:`${data.index._rev}`,
                _id:`${data.index._id}`
            }
            // doc.push(newDoc)
        // }else if(data.change==='task'){
        //     var newDoc={
        //         task:data.changevalue,
        //         _rev:data._rev
        //     }
        //      doc.push(newDoc)
        // }
        console.log("newdoc",newDoc);
        let response=updateDoc('dummyDB',newDoc)
        .then(function(response){
            console.log("res",response);
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
      static hourlyList () {
        let list = []
        let response=getAllDocs('dummyDB')
        .then(function(response){
           list=response
           return list
          })
          return response
      }
}