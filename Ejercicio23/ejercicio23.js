// Objeto con datos del usuario
const usuario = {
    nombre: "Luisa",
    edad: 17,
    email: "Luisa@example.com",
    fechaNacimiento: "2006-09-26"
};

// Definir un Proxy con validaciones
const proxyUsuario = new Proxy(usuario, {
    set(target, propiedad, valor) {
        // Eliminar espacios en blanco al inicio y al final
        if (typeof valor === "string") {
            valor = valor.trim(); // . trim() == elimina los espacios en blanco al inicio y al final de un string.
        }

        // Validaciones por tipo de dato
        const reglas = {
            edad: v => Number.isInteger(v), // Solo números enteros
            nombre: v => /^[a-zA-Z]+$/.test(v), // Solo letras
            email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), // Formato email válido
          fechaNacimiento: v => !isNaN(Date.parse(v)) // Fecha válida
          // .test() == se usa en expresiones regulares para verificar si un string cumple con un patrón específico.
          //si coincide con la expresion regular devuelve 'true' y si no coincide 'false'.
        };

        // Verificar si la propiedad tiene una regla definida
        if (reglas[propiedad]) {
            if (!reglas[propiedad](valor)) {
                console.error(`Error: El valor de "${propiedad}" no es válido.`);
                return false; // Bloquea la asignación
            }
        }

        console.log(`Modificando "${propiedad}" a: ${valor}`);
        target[propiedad] = valor;
        return true; // Permite la asignación
    }
});

//  Probamos el Proxy
proxyUsuario.edad = 18;           //  Válido
proxyUsuario.edad = "dieciocho";  //  Error: Debe ser número
proxyUsuario.nombre = "Ana";      //  Válido
proxyUsuario.nombre = "Ana123";   //  Error: Solo letras
proxyUsuario.email = "test@mail"; //  Error: Formato incorrecto
proxyUsuario.fechaNacimiento = "2000-05-10"; //  Válido
proxyUsuario.fechaNacimiento = "fecha"; // Error: No es una fecha válida
proxyUsuario.nombre = "  Camilo  "; // Se guarda como "Camilo" sin espacios
