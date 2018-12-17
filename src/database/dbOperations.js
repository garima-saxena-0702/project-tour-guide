let dbOperations = {};

dbOperations.database = require('./db.js');

dbOperations.insertOneOpr = function (collection, dataObj) {
  return dbOperations.database.getCollection(collection)
    .then((coll) => {
      return coll.coll.insertOne(dataObj)
        .then((result) => {
          coll.client.close();
          return result
        })
    });
}

module.exports = dbOperations;
