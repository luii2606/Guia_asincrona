fetch("ejercicio16.json") //LLamada al archvio json
.then(respuesta => respuesta.json())  //Convertir el resultado a .json
.then(dato_json => {           //Obtenemos los datos del archivo json
    dato_json.forEach(objeto => { //Recorremos los datos por cada objeto del archivo
        const datos_tipo_Int = Object.values(objeto).filter(num_enteros => Number.isInteger(num_enteros));
        console.log(datos_tipo_Int);
        //Se declara una variable en la que se obtendra los valores del objeto "objeto", se filtra
        //solo los valores de tipo entero y finalmente se muestra
    });
})
