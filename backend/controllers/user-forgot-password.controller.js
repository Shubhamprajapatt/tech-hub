const dbConnect = require("../db/dbConnect");
const emailHandler = require("../helper/email-sent");

async function userForgotPasswordApi(req,res){
    try{
        const {email}=req.body;
        if(email){
            const user=await dbConnect();
            const userFind=await user.findOne({email: email});
            if(userFind){
                const otpGenerator=require("otp-generator");
                const otp=otpGenerator.generate(6, { upperCaseAlphabets: false, specialChars: false,lowerCaseAlphabets: false });
                console.log("otp",otp);
                const message=await emailHandler(email,otp,"Reset Password");
                if(message){
                    const userOptUpdate=await user.updateOne({email: email},{$set:{otp:otp}});
                    if(userOptUpdate?.matchedCount>0){
                       res.status(200).send({message:"OTP sent successfully and updated",status:1});
                    }
                    else{
                        res.status(200).send({message:"OTP sent but failed to update",status:0});
                    }
                }
                else{
                    res.send({message:"Otp not sent",status:0});
                }
            }
            else{
                res.status(200).send({message:"Email address not found please register first",status:0});
            }
        }
        else{
            res.status(200).send({message:"email can't be blank",status:0});
        }
    }
    catch(error){
        console.log("error",error);
        res.status(500).send({message:"Inernal server Error",status:0});
    }
}

module.exports={userForgotPasswordApi};