const dbConnect = require("../db/dbConnect");

async function userUpdateApi(req, res) {
  //logic here
  try {
    console.log("req.params: " ,req.params);
    const email = req.params.email;
    console.log(email);
    const { firstname, lastname, address } = req.body;
    console.log("firstname: " ,firstname);
    console.log("lastname: " ,lastname);
    const user = await dbConnect();
    const userFind = await user.findOne({ email: email });
    if(userFind){
      const userUpdate=await user.updateOne({ email: email},{$set:{firstname:firstname,lastname:lastname}});
      if(userUpdate){
        res.send({ message: "User details updated successfully", status: 1 });
      }
      else{
        res.send({ message: "User not updated", status: 0 });
      }
    }
    else{
      res.send({ message: "User Not Found", status: 0 });
    }
  } catch (error) {
    console.log("error: " , error);
    res.send({ message: "Internal Server Error", status: 0 });
  }
}

async function userProfileUpload(req, res) {
  //logic here
  try {
    console.log("req.params: " ,req.params);
    const email = req.params.email;
    console.log("req.file",req.file);
    console.log(email);
    // return;
    // const { firstname, lastname, address } = req.body;
    const user = await dbConnect();
    const userFind = await user.findOne({ email: email });
    if(userFind){
      const userUpdate=await user.updateOne({ email: email},{$set:{image:req.file.originalname}});
      if(userUpdate){
        res.send({ message: "User details updated successfully", status: 1 });
      }
      else{
        res.send({ message: "User not updated", status: 0 });
      }
    }
    else{
      res.send({ message: "User Not Found", status: 0 });
    }
  } catch (error) {
    console.log("error: " , error);
    res.send({ message: "Internal Server Error", status: 0 });
  }
}
module.exports = {userUpdateApi,userProfileUpload};
