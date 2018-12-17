let loginOperations = {};

loginOperations.db = require('./db.js');
loginOperations.tableName = "Credentials"

dbOperations.loginData = function (datObj) {
  return loginOperations.db.insertOneOpr(loginOperations.tableName, datObj);
}

module.exports = loginOperations;
