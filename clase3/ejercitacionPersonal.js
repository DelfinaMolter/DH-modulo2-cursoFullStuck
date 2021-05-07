/*
//PRUEBA GENERAL
let fs = require('fs');
let datos = fs.readFileSync(__dirname+'/prueba.txt','utf-8');
console.log(datos);
-----------------------------
//PROBANDO EL PAQUETE DE MOMENT
let moment = require('moment');
console.log(moment().format('MMM Do YYYY'));
-----------------------------
//PROBANDO CARPETA DE OBJETOS
let heroes = require('./superheroes');
console.log(heroes);
-------------------------------
//EJERCICIO 1 DE FUNCIONES - CLASE 4 PLAYGROUND
function esPar (numeroA) {
    return numeroA % 2 == 0;
};
console.log(esPar(2));
-------------------------------
//EJERCICIO 2 FUNCIONES - CLASE 4 PLAYGROUND
function anterior(n){
    return --n;
};
function triple(n){
    return n*3;
};
function anteriorDelTriple(n){
    let tripleF= triple(n)
    let anteriorF = anterior(tripleF);
    return anteriorF;
};
console.log(anterior(10));
console.log(triple(100));
console.log(anteriorDelTriple(1000));
----------------------------------
//EJERCICIO 3 FUNCIONES - CLASE 4 PLAYGROUND
function puedePasar(nombre) {
    let puede= true; 
    if (nombre!='Cosme Fulanito'){
        puede= true;
    }else {
        puede= false;
    };
    return puede;
}
console.log(puedePasar ('Cosme Fulanito'));
----------------------------------------------------------------
//EJERCICIO 4 ARRAYS - CLASE 4 PLAYGROUND
let estudiantes = [
    {
      nombre: 'Alvaro',
      promedio : 9,
      curso : 'Android',
    },
    {
      nombre: 'Daniel',
      promedio : 6,
      curso : 'Full Stack',
    },
    {
      nombre: 'Alexis',
      promedio : 3,
      curso : 'iOS',
    },
  ]
  
let alumnoNuevo1 =
{nombre: "Juan",
promedio: 5,
curso: "iOS"}

estudiantes.push(alumnoNuevo1);

let alumnoNuevo2 =
{nombre: "Miguel",
promedio: 2,
curso: "Android",}

estudiantes.push(alumnoNuevo2);

console.log(estudiantes);
----------------------------------------------
*/

