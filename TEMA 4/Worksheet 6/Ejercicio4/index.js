window.onload = () => {
    console.log("Página cargada");
}

function crearCookie(identificador, valor, fechaExpiracion) {
    var fecha = new Date();
    fecha.setTime(fecha.getTime() + (fechaExpiracion * 24 * 60 * 60 * 1000));
    var expiracion = "expira en " + fecha.toUTCString();

    document.cookie = identificador + "=" + valor + ";" + expiracion;
}

function leerCookie(identificador) {
    var nombre = identificador + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(nombre) == 0) {
            return cookie.substring(nombre.length, cookie.length);
        }
    }
    return null; 
}

function borrarCookie(identificador) {
    document.cookie = identificador + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


// Ejemplo de uso:
crearCookie("cookiePablo", "cookie de Pablo", 7);
var valor = leerCookie("cookiePablo"); 
console.log("Valor de mi Cookie: " + valor);

borrarCookie("cookiePablo");
