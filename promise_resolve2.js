let promesa = new Promise(function (resolve, reject) {
  //Se declara la nueva promesa
  setTimeout(() => {
    resolve("Hecho"); //Simula la acción de "exito"
  }, 3000);
});
promesa.then((result) => {
  console.log("Exito", result);
});
