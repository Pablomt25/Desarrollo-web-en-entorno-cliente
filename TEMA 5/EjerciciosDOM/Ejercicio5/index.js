window.onload = () => {
    console.log("Página cargada");

    const form = document.getElementById('form');
    const agregarArchivo = document.getElementById('agregarArchivo');
    const archivo = document.getElementById('archivo');

    agregarArchivo.addEventListener('click', () => {
        const nuevoInput = document.createElement('input');
        nuevoInput.type = 'file';
        nuevoInput.name = 'archivo';
        archivo.appendChild(nuevoInput);
    });
}