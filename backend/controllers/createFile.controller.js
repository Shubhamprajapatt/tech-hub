const dbConnect = require("../db/dbConnect");
const fs=require("fs");
async function createFileApi(req, res) {
    try{

        console.log("Creating file api calling");
         const id=req.params.id;
         const name=req.params.name;
         console.log("name",name);
         const data=req.body.data;
         console.log("data",JSON.stringify(data));
         fs.writeFile(`C:/Users/Shubham/Desktop/expressnode/nodebasics/expresswithnode/uploads/${name}.doc`,JSON.stringify(data),function(err){
            if(err){
                res.send({message:err.message,status:0})
            }
            else{
                res.send({message:"file created successfully",status:1,data:JSON.stringify(data)})
            }
         })
         return;
         const user =await dbConnect();
         const users = await user.findOne({email:email});
         if (users) {
          res.send({message:"user details getting successfully",status:1,user:users});
         }
          else{
            res.send({message:"user not getting",status:0});
          }
    }
    catch(error){
      console.log("error", error);
      res.send({ message: "Internal Server Error", status: 0 });
    }
  }
  
  module.exports = {createFileApi};