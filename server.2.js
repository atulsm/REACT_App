import express from 'express';
import config from "./config";

const server = express();

server.get('/', (req,res) => {
    res.send("Hello express");
});

server.listen(config.port, () => {
    console.info("Server is listening on port " + config.port);
});