var fechaHoy = new Date();

var fecha85 = new Date(fechaHoy);
fecha85.setDate(fechaHoy.getDate() + 85);

var fecha187 = new Date(fechaHoy);
fecha187.setDate(fechaHoy.getDate() - 187);

fecha85.setFullYear(fecha85.getFullYear() + 2);

fecha187.setHours(fecha187.getHours() - 24);

var fechaResto = new Date(fecha85 - fecha187);

document.write("<br>Fecha Hoy:", fechaHoy);
document.write("<br>Fecha 85:", fecha85);
document.write("<br>Fecha 187:", fecha187);
document.write("<br>Fecha Resto (diferencia en milisegundos):", fechaResto);
