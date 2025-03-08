// const miPromesa = new Promise((resolve, reject) => {
//     let exito = true; // Cambia a false para simular un error

//     setTimeout(() => {
//         if (exito) {
//             resolve(" ¡Operación exitosa!");
//         } else {
//             reject(" Ocurrió un error.");
//         }
//     }, 2000); // Simula un tiempo de espera de 2 segundos
// });

// // Usamos la promesa
// miPromesa
//     .then(resultado => console.log(resultado)) // Si se resuelve, imprime el mensaje
//     .catch(error => console.log(error)) // Si hay error, lo captura
//     .finally(() => console.log("Proceso finalizado"));

//-------------------------------------------------------
// const delay = new Promise((resolve, reject) => {
//   let aprobado = true;

//   setTimeout(() => {
//     if (aprobado) {
//       resolve("evaluación resuelta, muy bien");// la promesa se resuelve
//     } else {
//       reject("evaluación no aprobada, rechazada");// la promesa es rechazada
//     }
//   }, 1000);
  
// });

// delay(3000).then(() => alert("se ejecuta despues de 3 segundos"));
//----------------------------------------------------------

// ms: es el número de milisegundos que queremos esperar antes de que la promesa se resuelva.
function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms); // espera ms milisegundos y luego ejecuta resolve().

      //Como no pasamos ningún valor a resolve(), la promesa solo se resuelve sin datos.
    });
}

// //then: si la promes se resuelve, imprime le mensaje
delay(3000).then(() => alert("Se ejecuta después de 3 segundos"));
