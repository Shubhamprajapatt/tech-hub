const emailHandler = require("../helper/email-sent");
async function emailSendApi(req, res) {
 try{
  const user = req.body.email;
  console.log("user", user);
  const message = await emailHandler(user);
  if (message) {
    res.send({ message: "welcome email sent successfully", status: 1 });
  } else {
    res.send({ message: "welcome email sent failed", status: 0 });
  }
 }
 catch(error){
  res.send({ message:"Internal server errror please try again", status:0,error:error.message });
 }
}

module.exports = emailSendApi;
