
const autos = require ('./autos')

const persona ={
    nombre: "Juan",
    capacidadDePagoEnCuotas: 20000,
    capacidadDePagoTotal: 100000
    }

const concesionaria = {
    autos: autos,
    buscarAuto: function (patente){
        let busqueda= null;
        autos.forEach(function(element){
            if (element.patente== patente){
            busqueda = element;
        }
        })
        return busqueda;
        
    },
    venderAuto: function (patente){
        let auto = this.buscarAuto(patente);
        if (auto.vendido == false){
            return auto.vendido=true;
        }
    },
    autosParaLaVenta: function () {
        let autosDispo= [];
        autos.filter(function(element){
            if (element.vendido== false){
                return autosDispo.push(element);
            }
        })
        return autosDispo;
    },
    autosNuevos: function () {
        let autosDisponibles=this.autosParaLaVenta();
        let autos0km=autosDisponibles.filter(function(element){
            return element.km < 100;
        })
        return autos0km;       
    },
    listaDeVentas: function () {
        let autosVendidos= [];
        autos.filter(function(element){
            if (element.vendido== true){
                return autosVendidos.push(element);
            }
        })
        autosVendidos= autosVendidos.map(function(elemento) {
            return elemento.precio})
        return autosVendidos 
    },
    totalDeVentas: function () {
        let autosVendidos=this.listaDeVentas();
        if (autosVendidos.length==0){
            autosVendidos=0
        }else{
            autosVendidos= autosVendidos.reduce(function(acum, elemento) {
                return acum + elemento;
            })
        }
        return autosVendidos
    },
    puedeComprar: function (auto, persona) {
        let loCompra=false
        if (auto.precio <= persona.capacidadDePagoTotal && (auto.precio/auto.cuotas) <= persona.capacidadDePagoEnCuotas){
            return loCompra = true
        }else{
            return loCompra = false
        }
    },
    autosQuePuedeComprar: function (persona) {
        let autoParaVender = this.autosParaLaVenta();
        
        let autosQueSiPuedeComprar=[];
        autoParaVender.forEach(auto=>{
            this.puedeComprar(auto, persona) == true?autosQueSiPuedeComprar.push(auto):"";
        })
        return autosQueSiPuedeComprar;
        
        // let autosQueSiPuedeComprar=[];
        // autoParaVender.forEach(function (auto){
        //     if (this.puedeComprar(auto, persona) == true){
        //         return autosQueSiPuedeComprar.push(auto)
        //     }
        // })
        // return autosQueSiPuedeComprar;
        
    }
}

console.log(concesionaria.autosQuePuedeComprar(persona));
