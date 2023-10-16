var numColumnas = parseInt(prompt("Introduce el número de columnas:"));
var altura = parseInt(prompt("Introduce la altura de las celdas en píxeles:"));
var ancho = parseInt(prompt("Introduce el ancho de las celdas en píxeles:"));


document.write('<table border="0" cellspacing="2" bgcolor="black" width="200">');
document.write('<tr bgcolor="white" height="' + altura + '">');


for (var i = 0; i < numColumnas; i++) {
    document.write('<td width="' + ancho + '">&nbsp;</td>');
}

document.write('</tr>');
document.write('</table>');