//12. Define una función asincrónica que espere 1 segundo y luego devuelva una cadena que diga "Operación completada". Utiliza async/await


async function asincrónica() {

  let promise = new Promise((resolve) => {
    setTimeout(() => resolve("Operación Completada"), 1000)
  });

  let result = await promise; // espera hasta que la promesa se resuelva (*)

  alert(result); 
}

asincrónica();