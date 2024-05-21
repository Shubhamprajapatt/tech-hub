const express = require('express');
const Router=express.Router();
const User=require("../models/user.model");
const fs=require('fs');
const multer=require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
//require homeApi from home.controller
const homeApi = require("../controllers/home.controller");

const checkFields=require("../middleware/check-fields");
//require rootApi from root.controller
const rootApi = require("../controllers/root.controller")
Router.get("/",rootApi );
Router.get("/home", homeApi);  

//get image data
Router.get("/profile/:name",function (req, res, next) {
  const name = req.params.name;

  fs.readFile(`C:/Users/Shubham/Desktop/expressnode/nodebasics/expresswithnode/uploads/${name}`,function(err, data){
    console.log("data",data);
       if(err){
        console.log("error",err);
        res.send({message:"image data fectched successfully",status:1,error:err});
       }
       else{
        res.send(data);
       }
   })
})
 //require getUsersApi from get-users.controller
 const getUserrController = require("../controllers/get-users.controller");
Router.get("/get-users", getUserrController.getUsersApi); 

//require register.controller
const {registerApi} = require("../controllers/register.controller")
//register-api
Router.post("/register",registerApi );

//require loginApi from login.controller
const loginApi = require("../controllers/login.controller");
//login-api
Router.post("/login",loginApi);


//require user-update by email.controller
const userUpdateController = require("../controllers/user-update.controller")
//user-update by email api
Router.post("/api/user-updatebyemail/:email",userUpdateController.userUpdateApi);
Router.post("/api/profileupload/:email",upload.single("image"),userUpdateController.userProfileUpload);


//require user-delete by email.controller
const userDeleteController = require("../controllers/user-delete.controller");
Router.post("/api/user-deletebyEmail/:email",userDeleteController.userDeletebyEmailApi);
Router.post("/api/alluser-delete",userDeleteController.alluserDeleteApi);

//require getspecific user by email.controller
Router.get("/api/get-specific-user/:email",getUserrController.getSpecificUserApi);



//user insert using mongoose model route

Router.post("/api/userinsert",async (req,res)=>{
  const {name,email,password,role}=req.body;
  const user=new User({name:name,email:email,password:password,role:role});
  const result=await user.save();
  if(result){
    res.send({message:"user inserted successfully",status:1,data:result});
  }
  else{
    res.send({message:"user inserted failed",status:0});
  }
})

//require user-password by email.controller
const userForgotPasswordController = require("../controllers/user-forgot-password.controller");
//forgot-password api
Router.post("/api/forgot-password",userForgotPasswordController.userForgotPasswordApi);

//require emailApi from email-sent.controller
const emailSendApi = require("../controllers/email-sent.controller")
//email-sent api to the user
Router.post("/api/email-sent",checkFields,emailSendApi);

const createFileController=require("../controllers/createFile.controller")

//createFile
Router.post("/api/createFile/:id/:name/upload",createFileController.createFileApi);

module.exports = Router;