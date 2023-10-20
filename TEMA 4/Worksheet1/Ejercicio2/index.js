window.onload = ()=>{
    console.log("Pagina cargada")

    asociarEventos();
}

function asociarEventos(){
    
    function obtenerCoordenadas(evento) {
        var coordenadas = document.getElementById('coordenadas');
        coordenadas.textContent = 'X: ' + evento.clientX + ', Y: ' + evento.clientY;
        }
        
        document.addEventListener('mousemove', obtenerCoordenadas);

}