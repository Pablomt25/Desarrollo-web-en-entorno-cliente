function tirada(max, min) {
    var aleatorio = Math.ceil(Math.random()*(max - min) + min);
    return aleatorio;
}


document.write("El dado ha caido en el numero " + tirada(6,1));