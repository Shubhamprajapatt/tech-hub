const dbConnect=require("../db/dbConnect");
async function loginApi (req, res) {
    try{
      const { email, password } = req.body;
      const user=await dbConnect();
      const userFind = await user.findOne({ email: email});
      if(userFind){
        if(userFind.password===password){
          res.send({
            message: "Login successfully",
            status: 1,
          });
        }
        else{
          res.send({message:"Invalid email or password",status:0});
        }
      }
      else{
        res.send({message:"Email address not found",status:0});
      }

    //   res.send({
    //   message: "Login successfully",
    //   email: email,
    //   password: password,
    //   status: 1,
    // });
    }
    catch(error){
      console.log("error in catch block",error);
      res.send({message:"Internal Server Error",status:0});
    }
  }

module.exports = loginApi;