let coordenadasArray = [];
let distanciaTotal = 0; 

function obtenerPosicion(coordenadas) {
    let latitud = coordenadas.coords.latitude;
    let longitud = coordenadas.coords.longitude;

    coordenadasArray.push({ latitud, longitud });

    if (coordenadasArray.length > 1) {
        let ultimaCoordenada = coordenadasArray[coordenadasArray.length - 2];
        let distancia = calcularDistancia(
            ultimaCoordenada.latitud,
            ultimaCoordenada.longitud,
            latitud,
            longitud
        );
        distanciaTotal += distancia;
    }

    actualizarMapa(latitud, longitud);
}

function calcularDistancia(lat1, lon1, lat2, lon2) {
    // Fórmula haversine para calcular la distancia entre dos puntos en la Tierra
    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * (Math.PI / 180)) *
            Math.cos(lat2 * (Math.PI / 180)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = R * c;

    return distancia;
}

function actualizarMapa(latitud, longitud) {
    map.setView([latitud, longitud], 13);
    marker.setLatLng([latitud, longitud]);

}


if (navigator.geolocation) {
    navigator.geolocation.watchPosition(obtenerPosicion);
} else {
    console.log("Geolocalización no soportada");
}




