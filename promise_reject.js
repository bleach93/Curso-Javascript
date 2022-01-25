let promesa = new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject("ERROR!!!"); // Cambia el estado a 'cumplido'
  }, 3000);
});
console.log("Promesa antes de ser rechazada", promesa); //Imprime la promesa
setTimeout(() => {
  console.log("Promesa antes de ser rechazada", promesa);
}, 3000); //Se ejecuta la misma función para ver el resultado
