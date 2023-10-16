var numColumnas = parseInt(prompt("Introduce el número de columnas:"));
var alturaCelda = parseInt(prompt("Introduce la altura de las celdas en píxeles:"));
var anchoCelda = parseInt(prompt("Introduce el ancho de las celdas en píxeles:"));

document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr height="' + alturaCelda + '">');

var i = 0;

while (i < numColumnas) {
    var colorFondo = i % 2 === 0 ? 'white' : 'black';
    document.write('<td width="' + anchoCelda + '" bgcolor="' + colorFondo + '">&nbsp;</td>');
    i++;
}

document.write('</tr>');
document.write('</table>');
