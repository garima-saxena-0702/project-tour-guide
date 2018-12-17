var MongoClient = require('mongodb').MongoClient;
var url = process.env.MONGODB_URI;


let data = {};

data.getCollection = function (coll) {
    return MongoClient.connect(url, { useNewUrlParser: true }).then(function (client) {
        console.log('connected to db');
        return {
            "client": client,
            "coll": client.db('heroku_f7j5lj97').collection(coll)
        }
    });
}

module.exports = data;
