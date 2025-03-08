const array = [12, 45, 68, -49, 0, -10];

// const filtrar = array.filter((item) => {
//   if (item < 0) {
//     return item
//   }
// });
// console.log(filtrar);



const filtrar = (array, callback) => {
  const nuevo = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) == true) {
      nuevo.push((array[i]));
    }
  } return nuevo;
}

const validar = (array) => {
  if (array < 0) {
    return true;
  }
  else {
    return false;
  }
}
console.log(filtrar(array, validar));



