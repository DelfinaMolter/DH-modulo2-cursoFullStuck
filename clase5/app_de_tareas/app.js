const misFuncionesDeTareas = require('./funcionesDeTareas');

let comando = process.argv[2]
// console.log(comando);

switch (comando){
    case "listar":
        let listaDeTareas= misFuncionesDeTareas.leerJSON();
        listaDeTareas.forEach(item=>{
            return console.log ("La tarea " + item.titulo + "esta en estado" + item.estado)
        });
        break;
    case undefined:
        console.log("Atención-tienes que pasar una acción");
        break;
    case "crearTarea":

        break;
    default:
        console.log("No entiendo qué quieres hacer");
}


