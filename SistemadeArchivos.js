const fs = require("fs"); // Se importa la librería "filesystem"

const file = process.argv[2]; // Se importa el archivo de texto creado

if(!file){ // Condición para colocar el nombre del archivo como segundo argumento
    throw new Error( // Manda un error si no se indica el nombre del archivo como segundo argumento
        "Indica el archivo que quieres leer como segundo argumento "
        );
}
const content = fs.readFile(file, function(err, content){ // Función asincrona para leer el número de lineas del archivo de texto, la variable file contiene el archivo de texto
    if(err){
        return console.log(err); // Regresa un error 
    }
    const lineas = content.toString().split("\n").length; // Se cuenta el número de líneas 
    console.log("Número de líneas: ", lineas); // Se imprime el número de líneas
});