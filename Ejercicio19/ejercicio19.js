// const promesa1 = new Promise((reject => setTimeout(() => reject("Promesa 1 rechazada"), 1000)));
// const promesa2 = new Promise((resolve => setTimeout(() => resolve("Promesa 2 resuelta"), 1000)));
// const promesa3 = new Promise((reject => setTimeout(() => reject("Promesa 3 rechazada"), 1000)));

const promesa1 = Promise.reject("promesa 1 ha sido rechazada")
const promesa2 = Promise.resolve("Promesa 2 ha sido resuelta")
const promesa3 = Promise.reject("promesa 3 ha sido rechazada")

//Promise.allSettled== Permite manejar varias promesas, que devolverá un array de objetos con el estado y el valor de cada promesa, haya sido resuelta o rechazada.
Promise.allSettled([promesa1, promesa2, promesa3])
  .then(respuesta => console.log(respuesta));