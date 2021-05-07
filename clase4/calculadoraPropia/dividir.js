function dividir(numero1,numero2){
    if (numero2==0) {
        return "No se puede dividir por cero"; 
    }else{
        return numero1/numero2;
    }
}

module.exports = dividir;

// console.log(dividir(10,2));