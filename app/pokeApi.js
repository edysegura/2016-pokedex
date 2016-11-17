"use strict"

//dependencies
const express = require("express")
const router = express.Router()
const pokeDB = require("./pokeDB")

//private
function catchPoke(pokeId) {
    return pokeDB.find(poke => poke.id === pokeId)
}

//poke api
router.get("/:pokeId", (request, response) => {
    let pokeId = request.params.pokeId
    let pokeData = catchPoke(pokeId)
    if(pokeData) {
        response.json(pokeData)
    }
    else {
        response
        .status(404)
        .send("Not Found!")
    }
})

//export router
module.exports = router