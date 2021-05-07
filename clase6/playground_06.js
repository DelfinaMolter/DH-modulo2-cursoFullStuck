/*
// EJERCICIO CALLBACKS 1
let doble = num1 => num1 * 2;
let triple = num1 => num1 * 3;

function aplicarCallback(num1, parametro){
    return console.log(parametro(num1));
};
aplicarCallback(2, doble);
aplicarCallback(4, triple);
//----------------------------------------------------------------

// EJERCICIO CALLBACKS 2
let suma= (num1, num2) => num1 + num2;
let resta= (num1, num2) => num1 - num2;
let multiplicacion = (num1, num2) => num1 * num2;
let division= (num1, num2) => num1 / num2;
function calculadora(num1, num2, operacion){
    return operacion(num1, num2);
}
//----------------------------------------------------------------

// EJERCICIO CALLBACKS 3
function agregarHttp(url) {
    return "http://" + url;
}

function procesar(url,callback){
    let arrayWeb=[];
    for (let i=0; i<url.length; i++){
        arrayWeb.push(callback(url[i]));
    }
    return console.log(arrayWeb);
}

procesar(["www.delfi.com", "www.nico.com", "www.digital.com"],agregarHttp);
//----------------------------------------------------------------

// EJERCICIO METODOS DE ARRAYS II 1
let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(number){
    return number.promedio >= 7;
});
let desaprobados = estudiantes.filter(function(boolean){
    return boolean.aprobado == false;
});

console.log(aprobados);
console.log(desaprobados);
--------------------------------------

// EJERCICIO METODOS DE ARRAYS II 2

let horariosPartida = [12, 14, 18, 21];

let horariosAtrasados = horariosPartida.map(function(numero){
    return numero - 1;
});
console.log(horariosAtrasados);
------------------------------------------------

// EJERCICIO METODOS DE ARRAYS II 3
let vueltas = [5, 8, 12, 3, 22];

let totalVueltas = vueltas.reduce(function(acumulador,numero){
    return acumulador + numero;
});
console.log(totalVueltas);
------------------------------------------------

// EJERCICIO METODOS DE ARRAYS II 4
let listaDeSuperMercado = [
    'Bife de chorizo', 
    'Coca Cola', 
    'Bananas', 
    'Lechuga', 
    'Chimichurri', 
    'Lata de tomates', 
    'Arvejas', 
    'Cereales', 
    'Pechuga de pollo', 
    'Leche'
];
//console.log(listaDeSuperMercado);
let cadaItemDeLaLista = listaDeSuperMercado.forEach(function(producto){
    return console.log(producto);
});
------------------------------------------------

// EJERCICIO OBJETO DATE 1
let fecha = new Date();
console.log("Día: "+fecha.getDate());
console.log('Hoy es el día '+fecha.getDate()+' del mes '+fecha.getMonth() +' del año '+fecha.getFullYear());
//------------------------------------------------

// EJERCICIO DESTRUCTURING 1
let destinosDelMundo = ['Marruecos', 'Bariloche', 'Barcelona', 'China', 'Grecia']
let [,bariloche, , china]=destinosDelMundo;
console.log(bariloche);
console.log(china);
//------------------------------------------------
*/
// EJERCICIO DESTRUCTURING 2
let auto  = {marca: 'Ferrari', kilometros: 31, color: "Rojo"};
let { marca ,  color} = auto;
console.log(auto);
console.log(marca);
console.log(color);
//------------------------------------------------


