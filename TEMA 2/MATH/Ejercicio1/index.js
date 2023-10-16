
var aleatorio1 = (Math.random()*(1 - 0));
document.write(aleatorio1);


var aleatorio2 = Math.ceil(Math.random()*(200 - 100) + 100);
document.write("<br>" + aleatorio2);



var mayor = prompt("Escribe el numero mayor");
var menor = prompt("Escribe el numero menor");

var aleatorio3 = Math.ceil(Math.random()*(mayor - menor));
document.write("<br>" + aleatorio3);
