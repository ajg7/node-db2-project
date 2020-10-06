const express = require("express");
const db = require("./connection");
const router = express.Router();

//Read

router.get("/", (request, response) => {
    db.select("*").from("cars")
        .then(accounts => {
            response.status(200).json({data: accounts})
        })
        .catch(error => {
            console.log(error)
            response.status(500).json({error: error.message})
        })
})


module.exports = router;