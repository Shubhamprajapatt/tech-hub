//db connection module require
const dbConnect = require("../db/dbConnect");
// const User=require("../models/user.model");
async function registerApi(req, res) {
  try {
    console.log("req.body", req.body);
    const { email, password, firstname, lastname, address, role } = req.body;
    console.log("register api called", email, password);
    if (email && password) {
      const users = await dbConnect();
      const userFind = await users.findOne({ email: email });
      if (userFind) {
        res.send({
          message: "user already registered",
          status: 0,
        });
      } else {
        const insertData = await users.insertOne({
          email: email,
          password: password,
          firstname: firstname,
          lastname: lastname,
          role: role,
        });
        if (insertData) {
          res.send({
            message: "user registered successfully",
            status: 1,
          });
        } else {
          res.send({
            message: "user registration failed",
            status: 0,
          });
        }
      }
     
    } else {
      res.send({
        message: "All fields are required",
        status: 0,
      });
    }
  } catch (error) {
    console.log("error", error);
    res.send({
      message: "Internal Server Error",
      status: 0,
    });
  }
}

module.exports = { registerApi };
