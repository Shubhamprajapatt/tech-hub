async function checkFields (req, res, next) {
      const email=req.body.email;
      if(email){
        next();
      }
      else{
        res.send({message:"email can't be blank",status:0})
      }
}

module.exports =checkFields;