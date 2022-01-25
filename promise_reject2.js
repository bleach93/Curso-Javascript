let promesa = new Promise(function (resolve, reject) {
  //Se declara la nueva promesa
  setTimeout(() => {
    reject("Error"); //Simula la acción de "exito"
  }, 3000);
});
promesa.catch((error) => {
  console.log("Falla", error);
});
