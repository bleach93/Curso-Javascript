var fs = require("fs"); //Se agrega la librería del sistema.

fs.writeFile('mensaje.txt', 'Esto es un mensaje', function () { // Se crea el archivo contenedor del mensaje
  console.log('Guardando');
});
console.log("Escribiendo en archivo..."); 

fs.readFile('mensaje.txt', function (err, datos) { //Se muestra el buffer del archivo
  console.log(datos);
});

fs.readFile('mensaje.txt', { encoding: "utf-8" }, function (err, datos) { //Se muestra el mensaje
  console.log(datos);
});
