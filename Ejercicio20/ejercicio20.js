//20. Crea un bucle que realice llamadas asincrónicas utilizando async/await para procesar una lista de elementos uno por uno.

async function Procesar_elemento(lista) {

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Procesando: ${lista}`);
      resolve();
    }, 1000);
  })
}

async function llamadas_asincronicas() {
  let lista = [2,4,6,8];
  for (let i = 0; i < lista.length; i++) {
    await Procesar_elemento(lista[i]);
    
  }

  console.log("No hay más elementos por procesar");
}
llamadas_asincronicas();
