const {Readable} = require("stream"); // Se importan las librerías

const readableStream = new Readable(); // Se crea un nuevo objeto 

readableStream.push("Eso nes es todo amigos!"); // Se usa la función push

readableStream.push(null); // Manda la instrucción null para vaciar el caché

readableStream.pipe(process.stdout); // Se usa el método pipe para leer la información en caché