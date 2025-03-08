const promise1 = () => new Promise((resolve => setInterval(() => resolve("Holaaa"), 1000)));

const promise2 = () => new Promise((resolve => setInterval(() => resolve("Dentro de poco tengo la presentación del plan de mejora"), 2000)));

const promise3 = () => new Promise((resolve => setInterval(() => resolve("Deseenme suerte!!"), 3000)));

//Promise.all== si tods las promesas se resuelven correctamente ella v a cumpli con devolver una matriz que contienen los valores resueltos de cada promesa en el mismo orden, en caso contrario que laguna promesa sea rechazada ella va a recahazar de inmediato

Promise.all([promise1(), promise2(), promise3()])
  .then(values => {
    console.log("Todas las promesas se han resuelto")
    console.log(values);
  }) 

// const allPromise = Promise.all([promise1, promise2, promise3]);

// allPromise.then(values => {
//   console.log(values); // [resolvedValue1, resolvedValue2]
// });