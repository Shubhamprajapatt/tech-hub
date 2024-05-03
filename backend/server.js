const express = require("express");
const cors=require("cors")//cross origin resource sharing;
const app = express();
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const dotenv = require("dotenv");
dotenv.config();
// const port = 8080;
console.log("process.env.PORT = ",process.env.PORT);
//require user route
const userRoute=require("./routes/user.route")
app.use('/',userRoute)
app.listen(process.env.PORT, function (err) {
  if (err) {
    console.log("getting error to server up");
  } else {
    console.log(`server runnig on http://localhost:${process.env.PORT}`);
  }
});
