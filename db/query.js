var MongoClient = require('mongodb').MongoClient;

var Query = function(){
  this.url = "mongodb://localhost:27017/record_shop"; 
};

Query.prototype = {

  // Function that gets all films from the database

  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        // get the right collection (table)
        var collection = db.collection('albums');
        collection.find().toArray(function(err, documents){
            onQueryFinished(documents);
        })
      }
    })
  }

}

module.exports = Query;