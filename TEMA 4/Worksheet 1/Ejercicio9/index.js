window.onload = () => {
    console.log("Página cargada");
    asociarEventos();
}

function asociarEventos() {
    var estaPintando = false;
    var offsetX, offsetY;
    var moverImagen = document.getElementById("imagen");

    moverImagen.addEventListener("mousedown", function(e) {
        estaPintando = true;
        offsetX = e.clientX - moverImagen.getBoundingClientRect().left;
        offsetY = e.clientY - moverImagen.getBoundingClientRect().top;
        moverImagen.style.zIndex = "2";

        document.onmousemove = function(e) {
            if (estaPintando) {
                moverImagen.style.left = (e.clientX - offsetX) + "px";
                moverImagen.style.top = (e.clientY - offsetY) + "px";
            }
        };

        document.onmouseup = function() {
            estaPintando = false;
            moverImagen.style.zIndex = "1";
            document.onmousemove = null;
            document.onmouseup = null;
        };
    });
}
