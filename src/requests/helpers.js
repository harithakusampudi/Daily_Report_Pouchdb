import PouchDB from 'pouchdb-browser'

var dummy = new PouchDB('dummy');
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
    if (dbName === 'dummy') {
      resolve(dummy);
    }
    if (dbName === 'mydb') {
        resolve(mydb);
     
    }
  });

 export const saveDoc = (dbName, doc) =>
 new Promise((resolve, reject) => {
 console.log("save doc",doc,dbName);
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
        db
          .get(doc)
          .then(record =>
            db
              .remove(record)
              .then(
                getAllDocs(dbName).then(remainingDocs => resolve(remainingDocs))
              )
          )
      )
      .catch(err => reject(err));
  });

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