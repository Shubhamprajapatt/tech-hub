//require user.data
const dbConnect = require("../db/dbConnect");
async function getUsersApi(req, res) {
  try {
    const user =await dbConnect();
    const users = await user.find().toArray();
    if (users.length > 0) {
      res.send({
        message: "users fetched succesffully",
        status: 1,
        users: users,
      });
    } else {
      res.send({ message: "users not found", status: 0 });
    }
  } catch (error) {
    console.log("error", error);
    res.send({ message: "Internal Server Error", status: 0 });
  }
}

async function getSpecificUserApi(req, res) {
  try{
       const email=req.params.email;
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

module.exports = {getUsersApi,getSpecificUserApi};
