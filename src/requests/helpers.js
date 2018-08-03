import PouchDB from 'pouchdb-browser'

var dummyDB = new PouchDB('dummyDB');
var mydb = new PouchDB('mydb');

export const getAllDocs = dbName =>
new Promise((resolve, reject) => {
setDB(dbName)
    .then(db =>
    db.allDocs({
        include_docs: true,
        // attachments: true,
        dcscending:true
    })
    )
    .then(results => {
    const resultsDocs = results.rows.map(row => row.doc);
    console.log("resultsDocs",resultsDocs);
    resolve(resultsDocs)
    }).then(response => {
        console.log("json",response);
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
  // export const deleteDoc = (dbName, doc) =>
  // dbName.get(doc._id).then(function (doc) {
  //   doc._deleted = true;
  //   return dbName.put(doc);
  // });

 export const updateDoc = (dbName, updatedDoc) =>
  new Promise((resolve, reject) => {
    setDB(dbName)
      .then(db =>
        db
          .put(updatedDoc)
          .then(getAllDocs(dbName).then(allDocs => resolve(allDocs)))
      )
      .catch(err => reject(err));
  });