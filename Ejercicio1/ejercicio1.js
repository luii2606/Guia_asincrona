// function Imprimirnumeros(desde, hasta) {
//     setTimeout(() => {
//       if (desde < hasta) {
//         console.log(desde++);
        
//       }
//     }, 1000);
// }

// Imprimirnumeros(1, 4)

// let tiempo = 1000;
  
// let temp = setTimeout(function Imprimir_numeros()){
//   if (desde < hasta) {
//    console.log(desde++);
   
    
// }
//   temp = setTimeout(Imprimirnumeros, tiempo);

// }, tiempo);

//-------------------
let desde = 1;
let hasta = 5;
function Impirmir_numeros(desde, hasta) {
  setInterval(() => {
    if (desde <=hasta) {
      console.log(desde++);
      
    }
  }, 1000);
}
Impirmir_numeros(desde, hasta);

//--------

// function imprimir_numeros(desde, hasta) {
//   setTimeout(() => {
    
//   }, timeout);
// }