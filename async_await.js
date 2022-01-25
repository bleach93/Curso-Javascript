function tripleDespues1Segundo(numero) {
  //Función Promesa que recibe un número como parametro, y por medio de un retraso de un segundo, regresa el triple del número
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(numero * 3);
    }, 1000);
  });
}
const ResultadoFinal = async function (numero) {
  //Función async await para forzar la función promise
  try {
    let triple = await tripleDespues1Segundo(numero).then((result) => {
      console.log(result);
    });
    return triple;
  } catch (error) {
    console.log("ERROR =>", error);
  }
};
ResultadoFinal(20); // Se ejecuta la función con un número.
