var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongo = require('mongodb').MongoClient;

mongo.connect("mongodb://localhost:27017", function (err, client) {
    var db = client.db('AngularCRUD');
    //    if(err){ console.log( err); }  
    //    else{ console.log('Connected to ' + db, ' + ', client); }  
    if (err) {
        console.log('Unable to connect to Mongo.')
        process.exit(1)
    } else {
        // var db1 = client.db('users');

        var collection = db.collection('users')
        // collection.insert({ name: 'taco', tasty: true }, function (err, result) {
            collection.find({ name: 'garima' }).toArray(function (err, docs) {
                console.log(docs[1])
                client.close()
            // })
        })
        app.listen(3000, function () {
            console.log('Listening on port 3000...')
        })
    }
});

var app = express()
app.use(bodyParser());
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});



