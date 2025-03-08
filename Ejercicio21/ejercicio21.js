async function cargarJSON() {
    try {
        const respuesta = await fetch("ejercicio21.json"); // Llamada al archivo JSON
        const dato_json = await respuesta.json(); // Convertir la respuesta a JSON
        
        dato_json.forEach(objeto => { // Recorrer y mostrar los objetos
            console.log(objeto);
        });
    } catch (error) {
        console.error("Error al cargar el archivo:", error.message);
        // Captura el error al procesar el JSON
    }
}

cargarJSON();

