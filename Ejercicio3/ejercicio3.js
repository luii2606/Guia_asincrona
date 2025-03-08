
function miMap(array, callback) {
    let resultado = []; // Nuevo array donde almacenaremos los resultados

    for (let i = 0; i < array.length; i++) {
        resultado.push(callback(array[i])); // Ejecutamos el callback y guardamos el resultado
    }

    return resultado; // Devolvemos el nuevo array
}


const numeros = [1, 2, 3, 4, 5];

function suma(num) {
    return num + 10 ;
}

const sumas = miMap(numeros, suma);

console.log(sumas);
