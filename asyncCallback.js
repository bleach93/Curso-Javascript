function realizaAlgo(asyncCallback){ //Función asincrona
    setTimeout(asyncCallback, Math.random()+1000); //Se realiza la función 
}

realizaAlgo(()=>{ // Se ejecuta la función asíncrona
    console.log("Esto se ejecuta de forma asíncrona");
})

console.log("Respuesta adelantada");