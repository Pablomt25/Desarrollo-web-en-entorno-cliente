function obtenerPosicion(coordenadas){
    let latitud=coordenadas.coords.latitude;
    let longitud = coordenadas.coords.longitude;

    var map = L.map('map').setView([latitud, longitud], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    var marker = L.marker([latitud, longitud]).addTo(map);
}




if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(obtenerPosicion)
}else{
    console.log("Geolocalzación no soportada")
}