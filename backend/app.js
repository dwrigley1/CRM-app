const express = require("express") // allows us to make a backend server
const app = express() // activate this app variable to be an express server
const router = express.Router()
var cors = require("cors")
const Client = require("./clients")
app.use(cors()) // allows to use cors system to connect backend & frontend
app.use(bodyParser.json())
const secret = "supersecret"

app.listen(3000,function(){ // start the web server.. app.listen(portnumber, function)
    console.log("Listening on port 3000")
})

router.get("/clients", async(req,res) =>{
  try{
    const clients = await Client.find({}) // try to find a song, when found, await
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