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

//history model require
const history = require("./models/history.model");
const data=new history({
  item_name:"asdasdasd",
  price:100,
  quantity:10,
  item_total:1000,
  item_id:1,
  userId:1,
  status:"success",
})
data.save();

//require user route
const userRoute=require("./routes/user.route")
const dbConnect=require("./db/dbConnect");
dbConnect();
const User=require("./models/user.model");
app.use('/',userRoute)
app.listen(process.env.PORT, function (err) {
  if (err) {
    console.log("getting error to server up");
  } else {
    console.log(`server runnig on http://localhost:${process.env.PORT}`);
  }
});
