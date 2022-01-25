const fs = require("fs"); // Se importa la biblioteca del file system

const util = require("util"); 

const out = fs.createWriteStream('./out.log');

const err = fs.createWriteStream('./err.log');

const archivoDeConsola = new console.Console(out,err);

setInterval(()=>{
    archivoDeConsola.log(new Date());
    archivoDeConsola.error(new Error("oops!"));
},2000);

const mensajeDeDepuracion = util.debuglog("Pauta1");
mensajeDeDepuracion("Esto es un mensaje de depuración");