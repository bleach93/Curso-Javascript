const express = require("express");

const colors = require("colors");

const server = express();

const {config} = require('./config/index');

server.listen(config.port, () => {
    console.log('Servidor encendido en el puerto:'.green);
    console.log(config.port);
});

server.get("/",(req, res)=> {
    res.send("<h1>Hola Mundo</h1>");
    res.end();
});