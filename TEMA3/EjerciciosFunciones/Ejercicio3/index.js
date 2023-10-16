function tirada(max, min) {
    var aleatorio = Math.ceil(Math.random()*(max - min) + min);
    return aleatorio;
}
var resultados = [];
for (var i = 0; i < 6000; i++) {
  resultados.push(tirada(6, 1));
}
var recuento = {};
for (var i = 0; i < resultados.length; i++) {
  if (recuento[resultados[i]]) {
    recuento[resultados[i]]++;
  } else {
    recuento[resultados[i]] = 1;
  }
}
console.log(recuento);