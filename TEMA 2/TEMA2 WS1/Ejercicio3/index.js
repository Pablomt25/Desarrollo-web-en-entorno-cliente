var segundos = 60;

function actualizarContador() {
    document.write(segundos + " segundos restantes");
    segundos--;
    setTimeout(actualizarContador, 1000);
}

actualizarContador();
