// dependencies
const express = require("express")

// configuration
const app = express()
const port = 3000

// first route
app.get("/", (req, res) => {
    res.send("Hello Word")
})

// listener
app.listen(port, () => {
    console.log("Listening for requests on port", port)
})