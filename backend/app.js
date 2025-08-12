const express = require("express") // allows us to make a backend server
const app = express() // activate this app variable to be an express server
const router = express.Router()

app.listen(3000,function(){ // start the web server.. app.listen(portnumber, function)
    console.log("Listening on port 3000")
})


