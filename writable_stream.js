const {Writable} = require("stream"); // Importar las librerías

const writableStream = new Writable ({ // Se crea el objeto

    write(chunk, encoding, callback){ // Aplica la función "write"

        console.log(chunk.toString()); // Se escribe la función 

        callback(); // Callback

    }

});

process.stdin.pipe(writableStream); // Se aplica la función process