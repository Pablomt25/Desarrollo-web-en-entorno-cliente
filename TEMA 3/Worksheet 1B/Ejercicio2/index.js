function estaEnElRango(numero, max ,min) {
    if(numero>min && numero<max){
        return true;
    }else{
        return false;
    }
}

console.log(estaEnElRango(7,10,1));