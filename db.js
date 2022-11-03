var MongoClient = require('mongodb').MongoClient;
//Create a database named "mydb":
var url = "mongodb+srv://root:root@cluster0.eadfuac.mongodb.net/test";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
