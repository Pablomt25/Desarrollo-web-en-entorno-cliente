function calcularPotencia(numero,exponente) {
    if (exponente==0) {
        return 1;
    }else{
        return numero * calcularPotencia(numero, exponente - 1);
    }
}

console.log(calcularPotencia(5,2));