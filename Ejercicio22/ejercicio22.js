// Objeto original
const usuario = {
    nombre: "Luisa",
    edad: 17,
    pais: "Colombia"
};

// Definir un Proxy para interceptar operaciones sobre el objeto
const proxyUsuario = new Proxy(usuario, {
    get(target, propiedad) { // Intercepta la lectura de propiedades
        if (propiedad in target) {
            console.log(`Accediendo a la propiedad: ${propiedad}`);
            return target[propiedad];
        } else {
            console.warn(`La propiedad "${propiedad}" no existe.`);
            return undefined;
        }
    },
    set(target, propiedad, valor) { // Intercepta la escritura de propiedades
        if (propiedad === "edad" && typeof valor !== "number") {
            console.error("La edad debe ser un número.");
            return false; // Evita que se asigne el valor incorrecto
        }
        console.log(`Modificando "${propiedad}" a: ${valor}`);
        target[propiedad] = valor;
        return true; // Confirma que la asignación puedo realizarse
    }
});

// Probamos el Proxy
console.log(proxyUsuario.nombre); // Accediendo a una propiedad que si existe
proxyUsuario.edad = 18; // Modificando una propiedad
proxyUsuario.edad = "dieciocho"; // Intento fallido (error)
console.log(proxyUsuario.ciudad); // Accediendo a una propiedad que no existe
proxyUsuario.pais = "México"; // Modificando otra propiedad
