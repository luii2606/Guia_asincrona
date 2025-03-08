const find = (array, callback) => {
  
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) == true) {
      return true;
    }
    
  } return undefined;
}

array = [5,10,6,4,7];

const resultado = (numero) => {
  return numero > 20;
}

console.log(find(array, resultado));