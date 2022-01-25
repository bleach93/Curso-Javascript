const os = require ("os"); // Se importa la libreria "os"

console.log("Información del CPU", os.cpus()); // Desglosa la información de CPU

console.log("Dirección IP: ", os.networkInterfaces());// Desglosa de las interfaces de red

console.log("Memoria disponible: ", os.freemem());v// Desglosa la información de memoria libre del sistema

console.log("Tipo de SO: ", os.type(),os.release());// Desglosa la información del sistema operativo