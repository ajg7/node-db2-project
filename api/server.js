const express = require("express");

const db = require("../connection");
const carsRouter = require("../carsRouter");

const server = express();

server.use(express.json());

server.use("/api/cars", carsRouter);

server.get("/", (request, response) => {
    response.status(200).json({Frankenstein: "It's alive"})
})

module.exports = server;
