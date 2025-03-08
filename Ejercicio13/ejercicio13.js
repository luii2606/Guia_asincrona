const promesa_rechazada = new Promise((_, reject) =>{
  setTimeout(() => {
    reject("Promesa rechazada");
  }, 2000);
})  
promesa_rechazada
  .catch((error) => alert(error));