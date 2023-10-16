var edad = prompt("Dime tu edad");

if (edad<5) {
    document.write("Debes estar en el jardín de infancia");
}

if (edad>6  && edad<11) {
    document.write("Debes estar en primaria");
}

if (edad>12  && edad<16) {
    document.write("Debes estar en la ESO");
}

if (edad>17  && edad<21) {
    document.write("Debes estar en bachillerato o ciclos");
}

if (edad>21) {
    document.write("Debes estar en la universidad");
}
