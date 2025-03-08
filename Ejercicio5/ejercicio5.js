const every = (array, callback) =>{
   
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) == false) {
      return false;
    } 
  } return true;
}

array = [2, 15, 21, 36, 48, 20];
const go = (array) => {
  return array < 50;
}
console.log(every(array, go));
