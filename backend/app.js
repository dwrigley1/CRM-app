const express = require("express") // allows us to make a backend server
const app = express() // activate this app variable to be an express server
const router = express.Router()

app.listen(3000,function(){ // start the web server.. app.listen(portnumber, function)
    console.log("Listening on port 3000")
})


router.get("/clients", function(req,res){
    const client = {
        name: "John Doe",
        address: "123 Main St.",
        account_number: "4481234",
        system_type: "intrusion"
    }
    res.json(client)
})

// requests that use an API usually start with /api
app.use("/api", router)
//app.listen(3000)