document.addEventListener('DOMContentLoaded', function () {
    const btnBuscarTodo = document.getElementById('buscarTodo');
    const btnBuscarPeliculas = document.getElementById('buscarPeliculas');
    const btnBuscarSeries = document.getElementById('buscarSeries');
    const spanCerrarModalDetalles = document.getElementById('cerrarModalDetalles');
    const buscador = document.getElementById('buscador');

    btnBuscarTodo.addEventListener('click', buscarTodo);
    btnBuscarPeliculas.addEventListener('click', buscarPeliculas);
    btnBuscarSeries.addEventListener('click', buscarSeries);
    spanCerrarModalDetalles.addEventListener('click', cerrarModalDetalles);

    buscador.addEventListener('input', function () {
        minimo3Palabras();
    });
});

const apiKey = '783fb6a3';
let pagina = 1;
let resultadosTotales = 0;
let buscar = '';
let cargando = false;

function hacerSolicitud(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                callback(JSON.parse(xhr.responseText));
            } else {
                console.error('Error en la solicitud:', xhr.status, xhr.statusText);
            }
        }
    };
    xhr.open('GET', url, true);
    xhr.send();
}

function minimo3Palabras() {
    buscar = document.getElementById('buscador').value;
    if (buscar.length >= 3) {
        buscarTodo();
    }
}

function buscarTodo() {
    pagina = 1;
    resultadosTotales = 0;
    document.getElementById('resultados').innerHTML = '';

    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${buscar}&page=${pagina}`;
    hacerSolicitud(url, function (data) {
        resultados(data);
        cambiarFondo();
    });
}

function buscarPeliculas() {
    pagina = 1;
    resultadosTotales = 0;
    document.getElementById('resultados').innerHTML = '';

    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${buscar}&type=movie&page=${pagina}`;
    hacerSolicitud(url, function (data) {
        resultados(data);
        cambiarFondo();
    });
}

function buscarSeries() {
    pagina = 1;
    resultadosTotales = 0;
    document.getElementById('resultados').innerHTML = '';

    const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${buscar}&type=series&page=${pagina}`;
    hacerSolicitud(url, function (data) {
        resultados(data);
        cambiarFondo();
    });
}

function resultados(data) {
    const resultsContainer = document.getElementById('resultados');
    if (!data || data.Response !== 'True') {
        return;
    }

    resultadosTotales = parseInt(data.totalResults);

    data.Search.forEach(movie => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');

        const imgSrc = movie.Poster !== 'N/A' ? movie.Poster : 'imagen.png';
        resultItem.innerHTML = `
            <img src="${imgSrc}" alt="${movie.Title} Poster" onclick="mostrarDetalles('${movie.imdbID}')">
            <h3>${movie.Title} (${movie.Year})</h3>
        `;
        resultsContainer.appendChild(resultItem);
    });

    document.getElementById('pagina-principal').style.display = 'none';
    document.getElementById('pagina-resultados').style.display = 'block';

    if (resultadosTotales > 10) {
        window.addEventListener('scroll', scroll);
    }
}

function scroll() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !cargando) {
        cargando = true;
        pagina++;
        const url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${buscar}&page=${pagina}`;
        hacerSolicitud(url, function (data) {
            cargando = false;
            resultados(data);
        });
    }
}

function mostrarDetalles(imdbID) {
    const url = `https://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`;
    hacerSolicitud(url, function (data) {
        mostrarDetallesPelicula(data);
    });
}

function mostrarDetallesPelicula(data) {
    const detalleContenido = document.getElementById('detalle-contenido');

    detalleContenido.innerHTML = `
        <img src="${data.Poster !== 'N/A' ? data.Poster : 'imagen.png'}" alt="${data.Title} Poster">
        <h2>${data.Title} (${data.Year})</h2>
        <p>Director: ${data.Director ? data.Director : 'No disponible'}</p>
        <p>Actores: ${data.Actors ? data.Actors : 'No disponible'}</p>
        <p>Sinopsis: ${data.Plot ? data.Plot : 'No disponible'}</p>
        <p>Valoraciones: ${data.imdbRating ? data.imdbRating : 'No disponible'}</p>`;

    document.getElementById('modal-detalle').style.display = 'block';
}

function cerrarModalDetalles() {
    document.getElementById('modal-detalle').style.display = 'none';
    document.getElementById('pagina-resultados').style.display = 'block';
}

function volverAListado() {
    document.getElementById('pagina-resultados').style.display = 'block';
    document.getElementById('detalle-pelicula').style.display = 'none';
}

function cambiarFondo() {
    document.body.style.backgroundImage = 'none';
}