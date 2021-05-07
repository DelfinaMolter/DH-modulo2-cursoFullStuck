let fs = require('fs');

let misFuncionesDeTareas ={
    leerJSON: function () {
        let tareas = fs.readFileSync('tareas.json','utf-8');
        tareas = JSON.parse(tareas);
        return tareas;
    },
    escribirJSON: function (arrayDeTareas) {
        let nuevaTarea = JSON.stringify(tarea)
        fs.writeFileSync('tareas.json', tareas.push(nuevaTarea))
    }      
}



module.exports = misFuncionesDeTareas;


