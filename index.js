const express = require('express'); // Se manda llamar a express

const path = require("path");

const http = require("http");

const app = express(); // Se crea el objeto app para express

const peliculasAPI = require('./routes/peliculas.js');

peliculasAPI(http.Server);

app.listen('3000', function() {
    console.log('Servidor web escuchando en el puerto 3000');
  });
