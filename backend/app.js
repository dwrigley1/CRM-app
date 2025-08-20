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

// get client
// existing function has passed testing 
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

// added 8/19
// get client by id
router.get("/clients/:id", async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) {
      return res.status(404).send("Client not found");
    }
    res.send(client);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server error");
  }
});

// added 8/19
// add new client in db
router.post("/clients", async(req,res)=>{
  try{
    const client = await new Client(req.body)
    await client.save()
    res.status(201).json(client)
    console.log(client)
  }
  catch(err){
    res.status(400).send(err)
  }
})

// added 8/19
// edit existing client in db
router.put("/clients/:id", async (req, res) => {
  try {
    const client = req.body;
    await Client.updateOne({ _id: req.params.id }, client);
    console.log("Updated:", client);
    res.sendStatus(204); // 204 = No Content, meaning success
  } catch (err) {
    console.error("Update error:", err);
    res.status(400).send(err);
  }
});

// added 8/19
// remove client from db
router.delete("/clients/:id", async (req, res) => {
  console.log("DELETE request for ID:", req.params.id);

  try {
    const result = await Client.deleteOne({ _id: req.params.id });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Client not found" });
    }

    res.status(200).json({ message: "Client deleted", id: req.params.id });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Failed to delete Client", error: err });
  }
});

// requests that use an API usually start with /api
app.use("/api", router)

 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});