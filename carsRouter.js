const express = require("express");
const db = require("./connection");
const router = express.Router();

//Read

router.get("/", (request, response) => {
    db.select("*").from("cars")
        .then(cars => {
            response.status(200).json({data: cars})
        })
        .catch(error => {
            console.log(error)
            response.status(500).json({error: error.message})
        })
})

router.get("/:id", (request, response) => {
    db("cars").where("id", "=", request.params.id)
        .then(cars => {
            response.status(200).json({data: cars});
        })
        .catch(error => {
            console.log(error);
            response.status(500).json({error: error.message});
        })
})


module.exports = router;