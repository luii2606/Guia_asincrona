
const some = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) == true) {
      return true;
    }
    
  } return false;
}

array = ["camilo", "draco", "sasuke"];
const so = (array) => {
  return array <= 5;
}
console.log(some(array, so));