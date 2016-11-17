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
    response.sendFile("./index.html")
})

const server = app.listen(3000, _ => console.log("Server running at http://localhost:3000"))