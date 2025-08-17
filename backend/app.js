require('dotenv').config(); // need to load env first..

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Client = require("./clients");
const router = express.Router();
const app = express();

app.use(cors());
app.use(bodyParser.json());

require("./database"); // MongoDB should see the process now


///app.listen(3000,function(){ // start the web server.. app.listen(portnumber, function)
   // console.log("Listening on port 3000")
//})

router.get("/clients", async(req,res) =>{
  try{
    const clients = await Client.find({}) 
    res.send(clients)
    console.log(clients)
  }
  catch (err){
    console.log(err)
  }
})

// requests that use an API usually start with /api
app.use("/api", router)

 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});