window.onload = () => {
    console.log("Página cargada");
}

function getCookie(name) {
    const value = "; " + document.cookie;
    const parts = value.split("; " + name + "=");
    if (parts.length === 2) {
        return parts.pop().split(";").shift();
    }
}

function setCookie(name, value, minutes) {
    const date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires;
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
    document.cookie = "nombre=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    alert("Sesión cerrada. La cookie ha sido eliminada.");
}

saludarUsuario();