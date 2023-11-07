window.onload = () => {
    console.log("Página cargada");
}

function getCookie(nombre) {
    const valor = "; " + document.cookie;
    const partes = valor.split("; " + nombre + "=");
    if (partes.length === 2) {
        return partes.pop().split(";").shift();
    }
}

function setCookie(nombre, valor, minutos) {
    const fecha = new fecha();
    fecha.setTime(fecha.getTime() + (minutos * 60 * 1000));
    const acaba = "acaba: " + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + "; " + acaba;
}

function saludarUsuario() {
    const nombre = getCookie("nombre");
    if (nombre) {
        alert("Hola, " + nombre + "! Bienvenido de nuevo.");
    } else {
        const nombreUsuario = prompt("Por favor, introduce tu nombre:");
        if (nombreUsuario) {
            setCookie("nombre", nombreUsuario, 5);
            alert("Hola, " + nombreUsuario + "! Bienvenido.");
        }
    }
}

function cerrarSesion() {
    document.cookie = "nombre=; acaba=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("Sesión cerrada. La cookie ha sido eliminada.");
}

saludarUsuario();