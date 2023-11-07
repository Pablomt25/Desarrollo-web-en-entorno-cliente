window.onload = () => {
    const imagenes = ["mono.jpeg", "mono2.webp", "mono3.jpg"];
    let indice = 0;
    const imagen = document.getElementById('imagen');
    const botonAnterior = document.getElementById('anterior');
    const botonSiguiente = document.getElementById('siguiente');

    function mostrarImagen(index) {
        if (index < 0) {
            index = imagenes.length - 1;
        } else if (index >= imagenes.length) {
            index = 0;
        }

        imagen.src = imagenes[index];
        indice = index;
    }

    botonAnterior.addEventListener('click', () => {
        mostrarImagen(indice - 1);
    });

    botonSiguiente.addEventListener('click', () => {
        mostrarImagen(indice + 1);
    });

    mostrarImagen(indice);
}