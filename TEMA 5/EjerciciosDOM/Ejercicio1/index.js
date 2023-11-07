window.onload = () => {
    console.log("Página cargada");
    
var enlaces = document.getElementsByTagName('a');

console.log('Número de enlaces de la página: ' + enlaces.length);

if (enlaces.length >= 2) {
    var penultimoEnlace = enlaces[enlaces.length - 2];
    console.log('Dirección a la que enlaza el penúltimo enlace: ' + penultimoEnlace.getAttribute('href'));
} else {
    console.log('No hay penúltimo enlace.');
}

var enlacesGoogle = 0;
for (var i = 0; i < enlaces.length; i++) {
    if (enlaces[i].getAttribute('href') === 'https://www.google.com') {
        enlacesGoogle++;
    }
}

console.log('Número de enlaces que enlazan a Google: ' + enlacesGoogle);

var tercerParrafo = document.getElementsByTagName('p')[2];

if (tercerParrafo) {
    var enlacesTercerParrafo = tercerParrafo.getElementsByTagName('a');
    console.log('Número de enlaces del tercer párrafo: ' + enlacesTercerParrafo.length);
} else {
    console.log('El tercer párrafo no existe en el documento.');
}

}
