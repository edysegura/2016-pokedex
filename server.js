"use strict"

//dependencies
const express = require("express")
const bodyParser = require("body-parser")

//express configuration
const app = express()
app.use(bodyParser.json())
app.use(express.static('public'))

//front-end
app.get("/", (request, response) => {
    response.sendFile("index.html")
})

//start server
const hostname = "localhost"
const port = 3000
const server = app.listen(port, _ => console.log(`Server running at http://${hostname}:${port}`))