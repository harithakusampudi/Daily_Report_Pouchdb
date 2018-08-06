// var PouchDB = require('pouchdb-browser');
import PouchDB from 'pouchdb-browser' 
import findPlugin from "pouchdb-find";
PouchDB.plugin(findPlugin);

var dummyDB = new PouchDB('dummyDB');
var mydb = new PouchDB('mydb');

export const getAllDocs = dbName =>
new Promise((resolve, reject) => {
setDB(dbName)
    .then(db =>
    db.allDocs({
        include_docs: true,
        dcscending:true
    })
    )
    .then(results => {
    const resultsDocs = results.rows.map(row => row.doc);
    resolve(resultsDocs)
    }).then(response => {
    })
    .catch(err => reject(err));
});

export const setDB = dbName =>
  new Promise((resolve, reject) => {
    if (dbName === 'dummyDB') {
      resolve(dummyDB);
    }
    if (dbName === 'mydb') {
        resolve(mydb);
     
    }
  });

 export const saveDoc = (dbName, doc) =>
 new Promise((resolve, reject) => {
   setDB(dbName)
     .then(db => db.post(doc))
     .then(getAllDocs(dbName).then(newDocs => resolve(newDocs)))
     .catch(err => 
       reject(err));
 });

 export const deleteDoc = (dbName, doc) =>
  new Promise((resolve, reject) => {
    setDB(dbName)
      .then(db =>
        db.get(`${doc._id}`)
          .then(record =>
            db.remove(record)
              .then(
                getAllDocs(dbName).then(remainingDocs => resolve(remainingDocs))
              )
          )
      )
      .catch(err => reject(err));
  });

// export const sortDoc = (dbName) =>
//       new Promise((resolve, reject) => {
//         setDB(dbName)
//           .then(db =>
//             db
//             .createIndex({
//               index: {
//                 fields: ['task'],
//               }
//             })
//               .then(db=>
//               db.find({
//                 selector:{
//                   task:{$ne:null}
//                 },
//                 sort: [{task: 'desc'}],
//               })
//           ).then(alldocs=>resolve(alldocs))
//         )
//           .catch(err => reject(err));
//       });

 export const updateDoc = (dbName, updatedDoc) =>
  new Promise((resolve, reject) => {
    setDB(dbName)
    .then(db =>
      db.get(`${updatedDoc._id}`)
      .then(db =>
        db.put(updatedDoc)
          .then(getAllDocs(dbName).then(allDocs => resolve(allDocs)))
      ))
      .catch(err => reject(err));
  });

  export const getWeeklyDocs = dbName =>
new Promise((resolve, reject) => {
setDB(dbName)
    .then(db =>
    db.allDocs({
        include_docs: true,
        // startkey:',
        // endkey:
        dcscending:true
    })
    )
    .then(results => {
    const resultsDocs = results.rows.map(row => row.doc);
    resolve(resultsDocs)
    }).then(response => {
    })
    .catch(err => reject(err));
});