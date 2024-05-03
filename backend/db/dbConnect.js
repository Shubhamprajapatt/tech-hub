const {MongoClient} =require("mongodb");

async function dbConnect(){
   const client = new MongoClient('mongodb://127.0.0.1:27017');
   const db=client.db('Tutorials');
   const collection = db.collection('Users');
   return collection;
}

module.exports=dbConnect;