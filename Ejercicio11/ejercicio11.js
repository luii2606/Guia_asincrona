// const delay = new Promise((resolve, reject) => {
//   let aprobado = true;

//   setTimeout(() => {
//     if (aprobado) {
//       resolve("evaluación resuelta, muy bien");// la promesa se resuelve
//     } else {
//       reject("evaluación no aprobada, rechazada");// la promesa es rechazada
//     }
//   });
  
// });

// delay(3000).then(() => alert("se ejecuta despues de 3 segundos"));

const lapromesa = new Promise((resolve) => {
  let aprobado = true;
  setTimeout(() => {
    if(aprobado) resolve("Promesa resuelta");
    
  }, 3000);
})
lapromesa
  .then((resultado) => alert(resultado));