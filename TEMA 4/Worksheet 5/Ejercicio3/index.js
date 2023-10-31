window.onload = () => {
    console.log("Página cargada");
    asociarEventos();
}

function asociarEventos(){
    const username = document.getElementById('username');
    const mayuscula = document.getElementById('mayuscula');
    const minuscula = document.getElementById('minuscula');
    const longitud = document.getElementById('longitud');

    username.addEventListener('input', () => {
        const validarUsername = username.value;

        const tieneMinuscula = /[A-Z]/.test(validarUsername);
        const tieneMayuscula = /[a-z]/.test(validarUsername);
        const tieneLongitud = validarUsername.length >= 6;

        if (tieneMinuscula) {
            mayuscula.style.color = 'green';
        } else {
            mayuscula.style.color = 'red';
        }

        if (tieneMayuscula) {
            minuscula.style.color = 'green';
        } else {
            minuscula.style.color = 'red';
        }

        if (tieneLongitud) {
            longitud.style.color = 'green';
        } else {
            longitud.style.color = 'red';
        }

    });

}