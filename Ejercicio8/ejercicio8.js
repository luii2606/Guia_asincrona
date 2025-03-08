// const array1 = [5, 12, 8, 130, 44];

// const isLargeNumber = (element) => element > 13;

// console.log(array1.findIndex(isLargeNumber));

const findIndex = (array, callback) => {
  
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
    
  } return undefined;
}

array = [5,10,6,4,7];

const respuesta = (num) => {
  return num > 10;
}

console.log(findIndex(array, respuesta));