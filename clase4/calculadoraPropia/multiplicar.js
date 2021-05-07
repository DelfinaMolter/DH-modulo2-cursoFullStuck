function multiplicar(numero1,numero2){
   if (numero1==0 || numero2==0) {
      return "El resultado es 0"; 
   }else{
      return numero1*numero2;
   }
    
}

module.exports = multiplicar;

// console.log(multiplicar(10,2));