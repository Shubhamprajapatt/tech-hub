const dbConnect = require("../db/dbConnect");

async function userDeletebyEmailApi(req,res){
    try{
         const email=req.params.email;
         console.log("email",email);
         const user=await dbConnect();
         const userDelete=await user.deleteOne({email:email});
         console.log("userDelete",userDelete);
         if(userDelete.deletedCount>0){
             res.send({message:"User deleted successfully",status:1});
         }
         else{
             res.send({message:"User not deleted",status:0});
         }
    }
    catch(error){
        res.send({message:"Internal Server Error",status:0});
    }
}

async function alluserDeleteApi(req,res){
    try{
         const user=await dbConnect();
         const userDelete=await user.deleteMany();
         console.log("userDelete",userDelete);
         if(userDelete.deletedCount>0){
             res.send({message:"User deleted successfully",status:1});
         }
         else{
             res.send({message:"User not deleted",status:0});
         }
    }
    catch(error){
        console.log("error",error);
        res.send({message:"Internal Server Error",status:0});
    }
}
module.exports={userDeletebyEmailApi,alluserDeleteApi};