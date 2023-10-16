function establecerACero(array) {
    for (let i = 0; i < 10; i++) {
        array[i] = 0;
    }
}

function sumarUno(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] += 1;
    }
}

function mostrarArray(array) {
    console.log(array.join(' '));
}

let miArray = [5, 8, 12, 3, 7, 20, 15, 6, 9, 10];

establecerACero(miArray);
mostrarArray(miArray);  

sumarUno(miArray);
mostrarArray(miArray);  
