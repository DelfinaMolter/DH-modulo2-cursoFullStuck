/*
let frase = 'BreakingBad Rules!';
console.log(frase.slice(-10));
------
//EJERCICIO METODOS DE STRINGS 1
let digital = "digitalhouse.com.ar";
function dominio (string){
    let stringCompleto="http://www."+string;
    return stringCompleto
};
console.log(dominio(digital));
------
//EJERCICIO METODOS DE STRINGS 2
let texto =  "string";
console.log(texto.length);
--------

//EJERCICIO METODOS DE STRINGS 3
function reemplazoFastFast(texto, busqueda, remplazo) {
    return texto.replace(busqueda, remplazo);
}
console.log(reemplazoFastFast("Me gusta el deporte", "el deporte", "programar"));
----------------------------------------------------------------

//EJERCICIO METODOS DE STRINGS 4
function menciona(texto, palabra ){
    let existePalabra = texto.indexOf(palabra);
    if (existePalabra >=0 ){
        return true;
    }else {
        return false;
    }
    
};
console.log(menciona("Tremendo DH", "DH"));
--------------------

//EJERCICIO METODOS DE STRINGS 5
let texto ='¡Hola!, soy Carli';
let licenciada= texto.slice(-5);
console.log(licenciada);
-----

//EJERCICIO OBJETO LITERAL 1
let perro = {
    nombre: "Luna",
    edad: 13,
    vacunado: true, 
};
---------

//EJERCICIO OBJETO LITERAL 2
let deportista = {
	energia: 100,
    experiencia: 10,
    nombre: "Aimar",
    entrenarHoras: function (cantidadDeHoras){
        this.energia =this.energia - (cantidadDeHoras*5)
        this.experiencia = this.experiencia+ (cantidadDeHoras*2)
    },
};

console.log("==Antes de comenzar entrenamiento==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
console.log("==ENTRENANDO==");
deportista.entrenarHoras(5);
console.log("==FIN ENTRENAMIENTO==");
console.log("Deportista energia: "+deportista.energia);
console.log("Deportista experiencia: "+deportista.experiencia);
---------

//EJERCICIO ARROW FUNCTION 1
let dameCinco = () => [1,2,3,4,5];

let multiplicarPorDos = () => 123 * 2 ;

let mostrarNombre = () => "Mi nombre es Hernán";
----------------------------------------------------------------

//EJERCICIO ARROW FUNCTION 2
let saludar = nombre => 'Hola, ' + nombre + '!';
--------------------------------

//EJERCICIO ARROW FUNCTION 3
let saludar = (nombre, apellido) =>'Hola, ' + nombre + ' ' +  apellido + '!';
----------

//EJERCICIO CONDICIONALES 1
function tengoClases(dia) {
	switch (dia) {
        case "lunes":
        case "miércoles":
        case "viernes":
            return console.log("tenés clases");
            break;
        default:
            return console.log("no tenés clases")
	}
}
----------------------------------------------------------------

//EJERCICIO CONDICIONALES 2
let bicicletaA = {
    rodado: 18,
    marca: "Mountain Bike"
}
let bicicletaB = {
    rodado: 24,
    marca: "Aurora"
}

let bicicletaConRodadoGrande = bicicletaB.rodado > bicicletaA.rodado ? bicicletaB : bicicletaA;

console.log("La bicicleta con  mayor rodado es la "+ bicicletaConRodadoGrande.marca );

---------

//EJERCICIO CONDICIONALES 3
let dia = 'jueves'
function finDeSemana (dia) {	
	switch (dia){
        case 'viernes':
            console.log('buen finde')
            break;
        case 'lunes':
    	    console.log('buena semana')
            break;
        default:
    	    console.log('buen dia')
	}
}
---------------------------------

//EJERCICIO CICLO FOR 1
function  loro (texto){
    for (let i =1; i<=5 ; i++){
        console.log(texto);
    }
}
loro("sos lo más!")
----------

//EJERCICIO CICLO FOR 2
function noParesDeContarImparesHasta(numero){
    let cuantosImpares= 0;
    for (let i=1; i<=numero; i++){
        if ((i%2)!=0){
            cuantosImpares = cuantosImpares + 1;
        }
    }
    return cuantosImpares;
}
console.log(noParesDeContarImparesHasta(10));
*/