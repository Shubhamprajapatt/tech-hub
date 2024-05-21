const mongoose=require('mongoose');
const {MongoClient} =require("mongodb");

// async function dbConnect(){
//    const client = new MongoClient('mongodb://127.0.0.1:27017');
//    const db=client.db('Tutorials');
//    const collection = db.collection('Users');
//    return collection;
// }
const url="mongodb://127.0.0.1:27017/education";
const dbConnect=()=>{
       mongoose.connect(url).then(()=>{
         console.log("db connection successfully");
       }).catch((err)=>{
         console.log("db connection failed",err);
       })
}

module.exports=dbConnect;