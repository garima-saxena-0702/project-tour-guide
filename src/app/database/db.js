var MongoClient=require('mongodb').MongoClient;
var url="mongodb://loclhost:27017/admin_users";

MongoClient.connect(url,function(err,db){
    if(err){
        throw err;
    }
    console.log("Database created!!!!");
    var dbo=db.db("admin_users");
    dbo.createCollection("users",function(err,res){
        if(err) throw err;
        console.log("collection created",res)
        db.close();
    })
});

// module.exports(db_connect);